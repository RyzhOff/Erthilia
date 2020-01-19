const { Client, Collection } = require("discord.js");
const { TOKEN, PREFIX } = require("./config");
const client = new Client({ disableEveryone: true });

client.PREFIX = PREFIX;

client.commands = new Collection()
client.commands.set("erthilia", require("./commands/erthilia.js"));
client.commands.set("eval", require("./commands/eval.js"));


client.on("ready", () => require("./events/ready.js")(client));
client.on("message", msg => require("./events/message.js")(client, msg));
client.on("guildMemberAdd", member => require("./events/guildMemberAdd.js")(client, member));

client.login(process.env.TOKEN);
client.on("error", console.error);
client.on("warn", console.warn);
