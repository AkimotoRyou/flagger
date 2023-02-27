# flagger
Serverless discord bot to report message or user to mods hosted on Vercel serverless function. Inspired by [Yuudachi](https://github.com/Naval-Base/yuudachi) report commands, and [discord-trout](https://github.com/ianmitchell/discord-trout) as the base.

## Limitations
1. Can only serve one discord server and webhook per instance, multi server will require modification to either use cloud database or adding list of servers and their webhook links.
2. Can't determine whether same user or message are reported by multiple users.
3. Mods need to manually punish false reports.

## Requirements
- [Vercel](https://vercel.com) account and [Vercel CLI](https://vercel.com/cli)
- Discord account and a [discord bot](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot)

## Installation
1. [Invite](https://discordjs.guide/preparations/adding-your-bot-to-servers.html) your bot to your server with just `application.commands` scope.
2. Prepare a private channel and a webhook leading to that channel for the logs. 
	> Doesn't have to be in same server.
3. Download and extract all the files in this repository.
4. Rename `.env.example` to `.env` and replace the values with your actual data.
	> Token from `Bot` tab, public key and app id from `General Information` tab.
5. [Deploy](https://vercel.com/docs/concepts/functions/serverless-functions/quickstart) to vercel serverless function.
6. Add all of the `.env` variables to vercel project either from vercel cli or from vercel [dashboard](https://vercel.com/docs/concepts/projects/environment-variables)
7. Copy your vercel project url and paste it to Discord `Interactions Endpoint URL` at `General Information` tab on Discord developer portal.
	> Add `/api` at the end of the link too, it will look something like `https://projectName-vercelUsername.vercel.app/api`.