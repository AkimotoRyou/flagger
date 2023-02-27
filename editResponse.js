const fetch = require("node-fetch");

const editResponse = async (token, content) => {
	const edit = await fetch(
		`https://discord.com/api/v10/webhooks/${process.env.APPLICATION_ID}/${token}/messages/@original`,
		{
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bot ${process.env.TOKEN}`,
			},
			method: "PATCH",
			body: JSON.stringify({
				content: content,
			}),
		}
	);
	return edit;
};

module.exports = {
	editResponse
};