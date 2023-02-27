const {
	InteractionResponseType,
	InteractionResponseFlags,
} = require("discord-interactions");
const { ResponseStatusTypes } = require("../constants.js");

const sendResponse = async (response, content) => {
	response.status(ResponseStatusTypes.Success).send({
		type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
		data: {
			content: content,
			flags: InteractionResponseFlags.EPHEMERAL,
		}
	});
};

module.exports = {
	sendResponse
};