/* Copyright (C) 2023 AkimotoRyou
 * License: AGPL-3.0 or Later */

const {
	InteractionResponseType,
	InteractionType,
	verifyKey,
} = require("discord-interactions");
const {
	about,
	reportChatInput,
	messageReportContextMenu
} = require("../commandsData.js");
const {
	ApplicationCommandTypes,
	EmbedLimits,
} = require("../constants.js");
const getRawBody = require("raw-body");
const i18next = require("i18next");
const I18NexFsBackend = require("i18next-fs-backend");
const { sendWebhook } = require("../sendWebhook.js");
const { sendResponse } = require("../sendResponse.js");
const info = require("../package.json");
const { join, parse, resolve } = require("path");
const fs = require("fs");

// Reading locale files
const langNames = fs.readdirSync(join(__dirname, "../locales")).filter(fileName => {
	const joinedPath = join(join(__dirname, "../locales"), fileName);
	const isDirectory = fs.lstatSync(joinedPath).isDirectory();
	return isDirectory;
});

// error
if (langNames.length == 0) console.log("- No valid locale files found.");

// i18next initialization.
i18next.use(I18NexFsBackend).init({
	debug: false,
	initImmediate: false,
	fallbackLng: "en-US",
	nonExplicitSupportedLngs: false,
	preload: langNames,
	load: "currentOnly",
	// Dynamically load namespaces
	ns: fs.readdirSync(resolve(__dirname, "../locales/en-US")).filter(file => {
		return file.endsWith(".json");
	}).map(fileName => {
		return parse(fileName).name;
	}),
	defaultNS: "default",
	returnNull: false,
	returnEmptyString: false,
	backend: {
		loadPath: join(__dirname, "../locales/{{lng}}/{{ns}}.json")
	},
	// returnObjects: true,
	joinArrays: "\n"
});

/**
 * @param {VercelRequest} request
 * @param {VercelResponse} response
 */
module.exports = async (request, response) => {
	if (request.method === "POST") {
		const signature = request.headers["x-signature-ed25519"];
		const timestamp = request.headers["x-signature-timestamp"];
		const rawBody = await getRawBody(request);

		const isValidRequest = verifyKey(
			rawBody,
			signature,
			timestamp,
			process.env.PUBLIC_KEY
		);

		if (!isValidRequest) {
			console.error("Invalid Request");
			return response.status(401).send({ error: "Bad request signature" });
		}

		const interaction = request.body;

		if (interaction.type === InteractionType.PING) {
			console.log("Handling Ping request");
			response.send({
				type: InteractionResponseType.PONG,
			});
		}
		else if (interaction.type === InteractionType.APPLICATION_COMMAND) {
			const { locale, guild_locale, member, data } = interaction;
			const guild_id = process.env.GUILD_ID;
			const user = member.user;
			const guildLocale = guild_locale ? i18next.getFixedT(guild_locale) : "";
			const userLocale = i18next.getFixedT(locale);

			// Handling chat input commands
			if (data.type === ApplicationCommandTypes.ChatInput) {
				switch (data.name.toLowerCase()) {
				// Chat input about command
				case about.name.toLowerCase(): {
					await sendResponse(response, userLocale("aboutMessage", {
						interpolation: {
							escapeValue:false
						},
						name: info.name,
						version: info.version,
						license: info.license,
						code: info.repository.url,
					}));
					break;
				}
				// Chat input report user command
				case reportChatInput.name.toLowerCase(): {
					const webhookUrl = process.env.WEBHOOK_LINK;
					if (!webhookUrl) return sendResponse(response, userLocale("errors:noWebhook"));

					if (data.options[0].name === "user") {
						const subOptions = data.options[0].options;
						const target = subOptions.find(key => key.name === "user");
						const reason = subOptions.find(key => key.name === "reason");
						const attachments = data.resolved ? Object.values(data.resolved?.attachments) : null;
						const evidence = [];
						if (attachments && attachments[0].content_type.includes("image")) evidence.push({ image: { url: attachments[0].url } });
						const description = [
							`**${guildLocale("reporter")}:** <@${user.id}>`,
							`**${guildLocale("suspect")}:** <@${target.value}>`,
							`**${guildLocale("reason")}:** \`\`\`${reason.value}\`\`\``,
						];
						const embeds = [{ description: description.join("\n") }, ...evidence];
						const send = await sendWebhook(user, webhookUrl, embeds);
						if (send.ok) {
							await sendResponse(response, userLocale("reportSuccess"));
						}
						else {
							const text = await send.text();
							console.error(text);
							await sendResponse(response, userLocale("errors:general", { message: text }));
						}
						break;
					}
					// Chat input report message command
					else if (data.options[0].name === "message") {
						const subOptions = data.options[0].options;
						const target = subOptions.find(key => key.name === "message-link");
						const reason = subOptions.find(key => key.name === "reason");
						const attachments = data.resolved ? Object.values(data.resolved?.attachments) : null;
						const evidence = [];
						if (attachments && attachments[0].content_type.includes("image")) evidence.push({ image: { url: attachments[0].url } });
						const description = [
							`**${guildLocale("reporter")}:** <@${user.id}>`,
							`**${guildLocale("messageLink")}:** ${target.value}`,
							`**${guildLocale("reason")}:** \`\`\`${reason.value}\`\`\``,
						];
						const embeds = [{ description: description.join("\n") }, ...evidence];
						const send = await sendWebhook(user, webhookUrl, embeds);
						if (send.ok) {
							await sendResponse(response, userLocale("reportSuccess"));
						}
						else {
							const text = await send.text();
							await sendResponse(response, userLocale("errors:general", { message: text }));
						}
						break;
					}
					else {
						console.log("Unknown Command");
						await sendResponse(response, userLocale("errors:noCommand"));
						break;
					}
				}
				default: {
					console.log("Unknown Command");
					await sendResponse(response, userLocale("errors:noCommand"));
					break;
				}
				}
			}
			// Handling message context menu commands
			else if (data.type === ApplicationCommandTypes.Message) {
				switch (data.name.toLowerCase()) {
				// Report message context menu command
				case (messageReportContextMenu.name.toLowerCase()): {
					const webhookUrl = process.env.WEBHOOK_LINK;
					if (!webhookUrl) return sendResponse(response, userLocale("errors:noWebhook"));

					const message = Object.values(data.resolved.messages)[0];
					let attachments = message.attachments.map(key => {if (key.content_type.includes("image")) return { image: { url: key.url } };});
					attachments = attachments.slice(0, EmbedLimits.maxEmbed - 1);
					const description = [
						`**${guildLocale("reporter")}:** <@${user.id}>`,
						`**${guildLocale("suspect")}:** <@${message.author.id}>`,
						`**${guildLocale("messageLink")}:** https://discord.com/channels/${guild_id}/${message.channel_id}/${message.id}`,
						`**${guildLocale("content")}:** \`\`\`${message.content ? message.content : "-"}\`\`\``,
					];
					const embeds = [{ description: description.join("\n") }, ...attachments];
					const send = await sendWebhook(user, webhookUrl, embeds);
					if (send.ok) {
						await sendResponse(response, userLocale("reportSuccess"));
					}
					else {
						const text = await send.text();
						console.error(text);
						await sendResponse(response, userLocale("errors:general", { message: text }));
					}
					break;
				}
				default: {
					console.log("Unknown Command");
					await sendResponse(response, userLocale("errors:noCommand"));
					break;
				}
				}
			}
			else {
				console.log("Unknown Type");
				await sendResponse(response, userLocale("errors:noCommand"));
			}
		}
		else {
			console.error("Unknown Type");
			response.status(400).send({ error: "Unknown Type" });
		}
	}
};