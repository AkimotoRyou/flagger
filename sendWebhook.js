const fetch = require("node-fetch");

const sendWebhook = async (user, webhookUrl, embeds) => {
	const send = await fetch(
		webhookUrl,
		{
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bot ${process.env.TOKEN}`,
			},
			method: "POST",
			body: JSON.stringify({
				username: user.username,
				avatar_url: `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`,
				content: "@here",
				embeds : embeds,
				allowed_mentions: {
					parse: ["everyone"]
				}
			}),
		}
	);
	console.log(send);
	return send;
};

module.exports = {
	sendWebhook
};