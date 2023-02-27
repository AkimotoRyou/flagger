const fetch = require("node-fetch");
const { about, reportChatInput, messageReportContextMenu } = require("./commandsData.js");

const register = async () => {
	const response = await fetch(
		// `https://discord.com/api/v10/applications/${process.env.APPLICATION_ID}/commands`,
		`https://discord.com/api/v10/applications/${process.env.APPLICATION_ID}/guilds/${process.env.GUILD_ID}/commands`,
		{
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bot ${process.env.TOKEN}`,
			},
			method: "PUT",
			body: JSON.stringify([about, reportChatInput, messageReportContextMenu]),
		}
	);

	if (response.ok) {
		console.log("Registered all commands");
	}
	else {
		console.error("Error registering commands");
		const text = await response.text();
		console.error(text);
	}
};
register();
