const ApplicationCommandTypes = {
	ChatInput: 1,
	User: 2,
	Message: 3,
};

const ResponseStatusTypes = {
	Success: 200,
	UnknownType: 400,
	InvalidRequest: 401,
};

const OptionTypes = {
	SubCommand: 1,
	SubCommandGroup: 2,
	String: 3,
	Integer: 4,
	Boolean: 5,
	User: 6,
	Channel: 7,
	Role: 8,
	Mentionable: 9,
	Number: 10,
	Attachment: 11,
};

const EmbedLimits = {
	maxEmbed: 10,
};

module.exports = {
	ApplicationCommandTypes, ResponseStatusTypes, OptionTypes, EmbedLimits
};