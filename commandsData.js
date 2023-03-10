const { ApplicationCommandTypes, OptionTypes } = require("./constants.js");

const reportChatInput = {
	name: "report",
	name_localizations: {
		"da": "rapportér",
		"de": "melden",
		"en-US": "report",
		"en-GB": "report",
		"es-ES": "informar",
		"fr": "signaler",
		"hr": "prijavi",
		"id": "laporkan",
		"it": "segnala",
		"lt": "pranešti",
		"hu": "bejelent",
		"nl": "rapporteren",
		"no": "rapporter",
		"pl": "zgłoś",
		"pt-BR": "denunciar",
		"ro": "raportează",
		"fi": "ilmianna",
		"sv-SE": "anmäl",
		"vi": "báo-cáo",
		"tr": "bildir",
		"cs": "nahlašovat",
		"el": "αναφέρω",
		"bg": "докладвам",
		"ru": "пожаловаться",
		"uk": "поскаржитися",
		"hi": "रिपोर्ट-करें",
		"th": "รายงาน",
		"zh-CN": "举报",
		"ja": "報告する",
		"zh-TW": "檢舉",
		"ko": "신고"
	},
	description: "Report a user or message",
	type: ApplicationCommandTypes.ChatInput,
	options: [
		{
			name: "user",
			name_localizations: {
				"da": "bruger",
				"de": "benutzer",
				"en-US": "user",
				"en-GB": "user",
				"es-ES": "usuario",
				"fr": "utilisateur",
				"hr": "korisnik",
				"id": "pengguna",
				"it": "utente",
				"lt": "naudotojas",
				"hu": "felhasználó",
				"nl": "gebruiker",
				"no": "bruker",
				"pl": "użytkownik",
				"pt-BR": "usuário",
				"ro": "utilizator",
				"fi": "käyttäjä",
				"sv-SE": "användare",
				"vi": "người-dùng",
				"tr": "kullanıcı",
				"cs": "uživatel",
				"el": "χρήστης",
				"bg": "потребител",
				"ru": "пользователь",
				"uk": "користувач",
				"hi": "उपयोगकर्ता",
				"th": "ผู้ใช้",
				"zh-CN": "用户",
				"ja": "ユーザー",
				"zh-TW": "用戶",
				"ko": "사용자"
			},
			description: "Report a user",
			description_localizations: {
				"da" : "Rapporter en bruger",
				"de" : "Melde einen Benutzer",
				"en-US" : "Report a user",
				"en-GB" : "Report a user",
				"es-ES" : "Informar de un usuario",
				"fr" : "Signaler un utilisateur",
				"hr" : "Prijavite korisnika",
				"id" : "Laporkan pengguna",
				"it" : "Segnala un utente",
				"lt" : "Pranešti apie vartotoją",
				"hu" : "Felhasználó jelentése",
				"nl" : "Gebruiker rapporteren",
				"no" : "Rapporter en bruker",
				"pl" : "Zgłoś użytkownika",
				"pt-BR" : "Denunciar um usuário",
				"ro" : "Raportează un utilizator",
				"fi" : "Ilmoita käyttäjästä",
				"sv-SE" : "Rapportera en användare",
				"vi" : "Báo cáo người dùng",
				"tr" : "Bir kullanıcıyı rapor et",
				"cs" : "Nahlásit uživatele",
				"el" : "Αναφορά χρήστη",
				"bg" : "Докладване за потребител",
				"ru" : "Сообщить о пользователе",
				"uk" : "Повідомити про користувача",
				"hi" : "उपयोगकर्ता की रिपोर्ट करें",
				"th" : "รายงานผู้ใช้",
				"zh-CN" : "举报用户",
				"ja" : "ユーザーを報告する",
				"zh-TW" : "舉報用戶",
				"ko" : "사용자 신고"
			},
			type: OptionTypes.SubCommand,
			options: [
				{
					name: "user",
					name_localizations: {
						"da": "bruger",
						"de": "benutzer",
						"en-US": "user",
						"en-GB": "user",
						"es-ES": "usuario",
						"fr": "utilisateur",
						"hr": "korisnik",
						"id": "pengguna",
						"it": "utente",
						"lt": "naudotojas",
						"hu": "felhasználó",
						"nl": "gebruiker",
						"no": "bruker",
						"pl": "użytkownik",
						"pt-BR": "usuário",
						"ro": "utilizator",
						"fi": "käyttäjä",
						"sv-SE": "användare",
						"vi": "người-dùng",
						"tr": "kullanıcı",
						"cs": "uživatel",
						"el": "χρήστης",
						"bg": "потребител",
						"ru": "пользователь",
						"uk": "користувач",
						"hi": "उपयोगकर्ता",
						"th": "ผู้ใช้",
						"zh-CN": "用户",
						"ja": "ユーザー",
						"zh-TW": "用戶",
						"ko": "사용자"
					},
					description: "The user to report",
					description_localizations: {
						"da": "Brugeren, der skal rapporteres",
						"de": "Der zu meldende Benutzer",
						"en-US": "The user to report",
						"en-GB": "The user to report",
						"es-ES": "El usuario a reportar",
						"fr": "L'utilisateur à signaler",
						"hr": "Korisnik za prijavu",
						"id": "Pengguna yang akan dilaporkan",
						"it": "L'utente da segnalare",
						"lt": "Naudotojas, kurį norite pranešti",
						"hu": "A jelentendő felhasználó",
						"nl": "De te rapporteren gebruiker",
						"no": "Brukeren som skal rapporteres",
						"pl": "Użytkownik do zgłoszenia",
						"pt-BR": "O usuário a ser reportado",
						"ro": "Utilizatorul de raportat",
						"fi": "Raportoitava käyttäjä",
						"sv-SE": "Användaren som ska rapporteras",
						"vi": "Người dùng cần báo cáo",
						"tr": "Raporlanacak kullanıcı",
						"cs": "Uživatel, který se má nahlásit",
						"el": "Ο χρήστης που θα καταγγελθεί",
						"bg": "Потребителят, който ще докладвате",
						"ru": "Пользователь для жалобы",
						"uk": "Користувач, якого потрібно звітувати",
						"hi": "रिपोर्ट करने वाला उपयोगकर्ता",
						"th": "ผู้ใช้ที่ต้องการรายงาน",
						"zh-CN": "要举报的用户",
						"ja": "報告するユーザー",
						"zh-TW": "要舉報的用戶",
						"ko": "신고할 사용자"
					},
					type: OptionTypes.User,
					required: true
				},
				{
					name: "reason",
					name_localizations: {
						"da": "årsag",
						"de": "grund",
						"en-US": "reason",
						"en-GB": "reason",
						"es-ES": "razón",
						"fr": "raison",
						"hr": "razlog",
						"id": "alasan",
						"it": "motivo",
						"lt": "priežastis",
						"hu": "ok",
						"nl": "reden",
						"no": "grunn",
						"pl": "powód",
						"pt-BR": "motivo",
						"ro": "motiv",
						"fi": "syy",
						"sv-SE": "anledning",
						"vi": "lý-do",
						"tr": "neden",
						"cs": "důvod",
						"el": "λόγος",
						"bg": "причина",
						"ru": "причина",
						"uk": "причина",
						"hi": "कारण",
						"th": "เหตุผล",
						"zh-CN": "原因",
						"ja": "理由",
						"zh-TW": "原因",
						"ko": "이유"
					},
					description: "Reason on reporting",
					description_localizations: {
						"da": "Årsag til rapportering",
						"de": "Grund für die Meldung",
						"en-US": "Reason on reporting",
						"en-GB": "Reason on reporting",
						"es-ES": "Razón de la denuncia",
						"fr": "Raison de la déclaration",
						"hr": "Razlog za prijavu",
						"id": "Alasan dalam melaporkan",
						"it": "Motivo della segnalazione",
						"lt": "Priežastis pranešant",
						"hu": "Ok a jelentésben",
						"nl": "Reden van rapportage",
						"no": "Grunn til rapportering",
						"pl": "Powód zgłoszenia",
						"pt-BR": "Motivo da denúncia",
						"ro": "Motivul raportării",
						"fi": "Ilmoituksen syy",
						"sv-SE": "Anledning till rapportering",
						"vi": "Lý do trong báo cáo",
						"tr": "Raporlama nedeni",
						"cs": "Důvod při hlášení",
						"el": "Λόγος κατά την αναφορά",
						"bg": "Причина за докладване",
						"ru": "Причина для сообщения",
						"uk": "Причина для повідомлення",
						"hi": "रिपोर्टिंग के कारण",
						"th": "เหตุผลในการรายงาน",
						"zh-CN": "举报原因",
						"ja": "報告の理由",
						"zh-TW": "舉報原因",
						"ko": "신고 사유"
					},
					type: OptionTypes.String,
					required: true
				},
				{
					name: "evidence",
					name_localizations: {
						"da": "bevis",
						"de": "beweis",
						"en-US": "evidence",
						"en-GB": "evidence",
						"es-ES": "evidencia",
						"fr": "preuve",
						"hr": "dokazi",
						"id": "bukti",
						"it": "evidenza",
						"lt": "irodymas",
						"hu": "bizonyíték",
						"nl": "bewijs",
						"no": "bevis",
						"pl": "dowody",
						"pt-BR": "provas",
						"ro": "dovezi",
						"fi": "todiste",
						"sv-SE": "bevis",
						"vi": "bằng-chứng",
						"tr": "kanıt",
						"cs": "důkaz",
						"el": "αποδείξεις",
						"bg": "доказателство",
						"ru": "доказательство",
						"uk": "доказ",
						"hi": "सबूत",
						"th": "หลักฐาน",
						"zh-CN": "证据",
						"ja": "証拠",
						"zh-TW": "證據",
						"ko": "증거"
					},
					description: "Report evidence",
					description_localizations: {
						"da": "Rapporter bevis",
						"de": "Beweis melden",
						"en-US": "Report evidence",
						"en-GB": "Report evidence",
						"es-ES": "Informar evidencia",
						"fr": "Signaler une preuve",
						"hr": "Prijavi dokaz",
						"id": "Bukti laporan",
						"it": "Segnala una prova",
						"lt": "Pranešti apie įrodymą",
						"hu": "Jelentse bevisét",
						"nl": "Meld bewijs",
						"no": "Rapporter bevis",
						"pl": "Zgłoś dowód",
						"pt-BR": "Denunciar evidência",
						"ro": "Raportează o dovadă",
						"fi": "Ilmianna todiste",
						"sv-SE": "Rapportera bevis",
						"vi": "Báo cáo bằng chứng",
						"tr": "Delil bildir",
						"cs": "Nahlásit důkaz",
						"el": "Αναφορά αποδείξεων",
						"bg": "Докладване на доказателство",
						"ru": "Сообщить о доказательствах",
						"uk": "Повідомити про докази",
						"hi": "सबूत की रिपोर्ट करें",
						"th": "รายงานหลักฐาน",
						"zh-CN": "举报证据",
						"ja": "証拠を報告する",
						"zh-TW": "檢舉證據",
						"ko": "증거 신고"
					},
					type: OptionTypes.Attachment
				},
			]
		},
		{
			name: "message",
			name_localizations: {
				"da": "meddelelse",
				"de": "nachricht",
				"en-US": "message",
				"en-GB": "message",
				"es-ES": "mensaje",
				"fr": "message",
				"hr": "poruka",
				"id": "pesan",
				"it": "messaggio",
				"lt": "pranešimas",
				"hu": "üzenet",
				"nl": "bericht",
				"no": "melding",
				"pl": "wiadomość",
				"pt-BR": "mensagem",
				"ro": "mesaj",
				"fi": "viesti",
				"sv-SE": "meddelande",
				"vi": "tin-nhắn",
				"tr": "mesaj",
				"cs": "zpráva",
				"el": "μήνυμα",
				"bg": "съобщение",
				"ru": "сообщение",
				"uk": "повідомлення",
				"hi": "संदेश",
				"th": "ข้อความ",
				"zh-CN": "消息",
				"ja": "メッセージ",
				"zh-TW": "訊息",
				"ko": "메시지"
			},
			description: "Report a message",
			description_localizations: {
				"da": "Rapporter en besked",
				"de": "Nachricht melden",
				"en-US": "Report a message",
				"en-GB": "Report a message",
				"es-ES": "Informar de un mensaje",
				"fr": "Signaler un message",
				"hr": "Prijavite poruku",
				"id": "Laporkan pesan",
				"it": "Segnala un messaggio",
				"lt": "Pranešti apie žinutę",
				"hu": "Jelentés küldése",
				"nl": "Een bericht rapporteren",
				"no": "Rapporter en melding",
				"pl": "Zgłoś wiadomość",
				"pt-BR": "Denunciar mensagem",
				"ro": "Raportează un mesaj",
				"fi": "Ilmoita viesti",
				"sv-SE": "Rapportera ett meddelande",
				"vi": "Báo cáo tin nhắn",
				"tr": "Bir mesajı raporla",
				"cs": "Nahlásit zprávu",
				"el": "Αναφορά μηνύματος",
				"bg": "Докладване на съобщение",
				"ru": "Пожаловаться на сообщение",
				"uk": "Повідомити про повідомлення",
				"hi": "संदेश की रिपोर्ट करें",
				"th": "รายงานข้อความ",
				"zh-CN": "举报消息",
				"ja": "メッセージを報告する",
				"zh-TW": "檢舉訊息",
				"ko": "메시지 신고"
			},
			type: OptionTypes.SubCommand,
			options: [
				{
					name: "message-link",
					name_localizations: {
						"da": "besked-link",
						"de": "nachrichtenlink",
						"en-US": "message-link",
						"en-GB": "message-link",
						"es-ES": "enlace-al-mensaje",
						"fr": "lien-du-message",
						"hr": "poveznica-na-poruku",
						"id": "tautan-pesan",
						"it": "collegamento-al-messaggio",
						"lt": "pranešimo-nuoroda",
						"hu": "üzenet-link",
						"nl": "bericht-link",
						"no": "melding-link",
						"pl": "link-do-wiadomości",
						"pt-BR": "link-da-mensagem",
						"ro": "link-către-mesaj",
						"fi": "viestin-linkki",
						"sv-SE": "meddelandelänk",
						"vi": "liên-kết-tin-nhắn",
						"tr": "mesaj-bağlantısı",
						"cs": "odkaz-na-zprávu",
						"el": "σύνδεσμος-μηνύματος",
						"bg": "връзка-към-съобщението",
						"ru": "ссылка-на-сообщение",
						"uk": "посилання-на-повідомлення",
						"hi": "संदेश-लिंक",
						"th": "ลิงก์ข้อความ",
						"zh-CN": "消息链接",
						"ja": "メッセージリンク",
						"zh-TW": "訊息連結",
						"ko": "메시지-링크"
					},
					description: "Link to message",
					description_localizations: {
						"da": "Link til besked",
						"de": "Link zur Nachricht",
						"en-US": "Link to message",
						"en-GB": "Link to message",
						"es-ES": "Enlace al mensaje",
						"fr": "Lien vers le message",
						"hr": "Poveznica na poruku",
						"id": "Tautan ke pesan",
						"it": "Link al messaggio",
						"lt": "Nuoroda į pranešimą",
						"hu": "Hivatkozás az üzenetre",
						"nl": "Link naar bericht",
						"no": "Lenke til melding",
						"pl": "Link do wiadomości",
						"pt-BR": "Link para a mensagem",
						"ro": "Link către mesaj",
						"fi": "Linkki viestiin",
						"sv-SE": "Länk till meddelande",
						"vi": "Liên kết đến tin nhắn",
						"tr": "Mesaja bağlantı",
						"cs": "Odkaz na zprávu",
						"el": "Σύνδεσμος προς το μήνυμα",
						"bg": "Линк към съобщението",
						"ru": "Ссылка на сообщение",
						"uk": "Посилання на повідомлення",
						"hi": "संदेश के लिंक",
						"th": "ลิงก์ไปยังข้อความ",
						"zh-CN": "链接到消息",
						"ja": "メッセージへのリンク",
						"zh-TW": "訊息連結",
						"ko": "메시지 링크"
					},
					type: OptionTypes.String,
					required: true
				},
				{
					name: "reason",
					name_localizations: {
						"da": "årsag",
						"de": "grund",
						"en-US": "reason",
						"en-GB": "reason",
						"es-ES": "razón",
						"fr": "raison",
						"hr": "razlog",
						"id": "alasan",
						"it": "motivo",
						"lt": "priežastis",
						"hu": "ok",
						"nl": "reden",
						"no": "grunn",
						"pl": "powód",
						"pt-BR": "motivo",
						"ro": "motiv",
						"fi": "syy",
						"sv-SE": "anledning",
						"vi": "lý-do",
						"tr": "neden",
						"cs": "důvod",
						"el": "λόγος",
						"bg": "причина",
						"ru": "причина",
						"uk": "причина",
						"hi": "कारण",
						"th": "เหตุผล",
						"zh-CN": "原因",
						"ja": "理由",
						"zh-TW": "原因",
						"ko": "이유"
					},
					description: "Reason on reporting",
					description_localizations: {
						"da": "Årsag til rapportering",
						"de": "Grund für die Meldung",
						"en-US": "Reason on reporting",
						"en-GB": "Reason on reporting",
						"es-ES": "Razón de la denuncia",
						"fr": "Raison de la déclaration",
						"hr": "Razlog za prijavu",
						"id": "Alasan dalam melaporkan",
						"it": "Motivo della segnalazione",
						"lt": "Priežastis pranešant",
						"hu": "Ok a jelentésben",
						"nl": "Reden van rapportage",
						"no": "Grunn til rapportering",
						"pl": "Powód zgłoszenia",
						"pt-BR": "Motivo da denúncia",
						"ro": "Motivul raportării",
						"fi": "Ilmoituksen syy",
						"sv-SE": "Anledning till rapportering",
						"vi": "Lý do trong báo cáo",
						"tr": "Raporlama nedeni",
						"cs": "Důvod při hlášení",
						"el": "Λόγος κατά την αναφορά",
						"bg": "Причина за докладване",
						"ru": "Причина для сообщения",
						"uk": "Причина для повідомлення",
						"hi": "रिपोर्टिंग के कारण",
						"th": "เหตุผลในการรายงาน",
						"zh-CN": "举报原因",
						"ja": "報告の理由",
						"zh-TW": "舉報原因",
						"ko": "신고 사유"
					},
					type: OptionTypes.String,
					required: true
				},
				{
					name: "evidence",
					name_localizations: {
						"da": "bevis",
						"de": "beweis",
						"en-US": "evidence",
						"en-GB": "evidence",
						"es-ES": "evidencia",
						"fr": "preuve",
						"hr": "dokazi",
						"id": "bukti",
						"it": "evidenza",
						"lt": "irodymas",
						"hu": "bizonyíték",
						"nl": "bewijs",
						"no": "bevis",
						"pl": "dowody",
						"pt-BR": "provas",
						"ro": "dovezi",
						"fi": "todiste",
						"sv-SE": "bevis",
						"vi": "bằng-chứng",
						"tr": "kanıt",
						"cs": "důkaz",
						"el": "αποδείξεις",
						"bg": "доказателство",
						"ru": "доказательство",
						"uk": "доказ",
						"hi": "सबूत",
						"th": "หลักฐาน",
						"zh-CN": "证据",
						"ja": "証拠",
						"zh-TW": "證據",
						"ko": "증거"
					},
					description: "Report evidence",
					description_localizations: {
						"da": "Rapporter bevis",
						"de": "Beweis melden",
						"en-US": "Report evidence",
						"en-GB": "Report evidence",
						"es-ES": "Informar evidencia",
						"fr": "Signaler une preuve",
						"hr": "Prijavi dokaz",
						"id": "Bukti laporan",
						"it": "Segnala una prova",
						"lt": "Pranešti apie įrodymą",
						"hu": "Jelentse bevisét",
						"nl": "Meld bewijs",
						"no": "Rapporter bevis",
						"pl": "Zgłoś dowód",
						"pt-BR": "Denunciar evidência",
						"ro": "Raportează o dovadă",
						"fi": "Ilmianna todiste",
						"sv-SE": "Rapportera bevis",
						"vi": "Báo cáo bằng chứng",
						"tr": "Delil bildir",
						"cs": "Nahlásit důkaz",
						"el": "Αναφορά αποδείξεων",
						"bg": "Докладване на доказателство",
						"ru": "Сообщить о доказательствах",
						"uk": "Повідомити про докази",
						"hi": "सबूत की रिपोर्ट करें",
						"th": "รายงานหลักฐาน",
						"zh-CN": "举报证据",
						"ja": "証拠を報告する",
						"zh-TW": "檢舉證據",
						"ko": "증거 신고"
					},
					type: OptionTypes.Attachment
				},
			]
		}
	],
};

const messageReportContextMenu = {
	name: "report",
	name_localizations: {
		"da": "rapportér",
		"de": "melden",
		"en-US": "report",
		"en-GB": "report",
		"es-ES": "informar",
		"fr": "signaler",
		"hr": "prijavi",
		"id": "laporkan",
		"it": "segnala",
		"lt": "pranešti",
		"hu": "bejelent",
		"nl": "rapporteren",
		"no": "rapporter",
		"pl": "zgłoś",
		"pt-BR": "denunciar",
		"ro": "raportează",
		"fi": "ilmianna",
		"sv-SE": "anmäl",
		"vi": "báo-cáo",
		"tr": "bildir",
		"cs": "nahlašovat",
		"el": "αναφέρω",
		"bg": "докладвам",
		"ru": "пожаловаться",
		"uk": "поскаржитися",
		"hi": "रिपोर्ट-करें",
		"th": "รายงาน",
		"zh-CN": "举报",
		"ja": "報告する",
		"zh-TW": "檢舉",
		"ko": "신고"
	},
	type: ApplicationCommandTypes.Message,
};

const about = {
	name: "about",
	name_localizations: {
		"da": "om",
		"de": "über",
		"en-US": "about",
		"en-GB": "about",
		"es-ES": "acerca-de",
		"fr": "à-propos",
		"hr": "o",
		"id": "tentang",
		"it": "informazioni",
		"lt": "apie",
		"hu": "rólunk",
		"nl": "over",
		"no": "om",
		"pl": "o-nas",
		"pt-BR": "sobre",
		"ro": "despre",
		"fi": "tietoa",
		"sv-SE": "om",
		"vi": "giới-thiệu",
		"tr": "hakkında",
		"cs": "o-aplikaci",
		"el": "πληροφορίες",
		"bg": "за",
		"ru": "о-программе",
		"uk": "про",
		"hi": "के-बारे-में",
		"th": "เกี่ยวกับ",
		"zh-CN": "关于",
		"ja": "について",
		"zh-TW": "關於",
		"ko": "정보"
	},
	description: "Information about this bot",
	description_localizations: {
		"da" : "Information om denne bot",
		"de" : "Informationen zu diesem Bot",
		"en-US" : "Information about this bot",
		"en-GB" : "Information about this bot",
		"es-ES" : "Información sobre este bot",
		"fr" : "Informations sur ce bot",
		"hr" : "Informacije o ovom botu",
		"id" : "Informasi tentang bot ini",
		"it" : "Informazioni su questo bot",
		"lt" : "Informacija apie šį botą",
		"hu" : "Információ erről a botról",
		"nl" : "Informatie over deze bot",
		"no" : "Informasjon om denne boten",
		"pl" : "Informacje o tym bocie",
		"pt-BR" : "Informações sobre este bot",
		"ro" : "Informații despre acest bot",
		"fi" : "Tietoja tästä botista",
		"sv-SE" : "Information om denna bot",
		"vi" : "Thông tin về bot này",
		"tr" : "Bu bot hakkında bilgi",
		"cs" : "Informace o této botě",
		"el" : "Πληροφορίες σχετικά με αυτόν τον bot",
		"bg" : "Информация за този bot",
		"ru" : "Информация о данном bot",
		"uk" : "Інформація про цей bot",
		"hi" : "इस बॉट के बारे में जानकारी",
		"th" : "ข้อมูลเกี่ยวกับบอทนี้",
		"zh-CN" : "有关此机器人的信息",
		"ja" : "このボットについての情報",
		"zh-TW" : "有關此機器人的資訊",
		"ko" : "이 봇에 대한 정보"
	},
	type: ApplicationCommandTypes.ChatInput,
};

module.exports = {
	about, reportChatInput, messageReportContextMenu
};