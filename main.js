const { Client } = require("discord.js");
const { TOKEN, PREFIX } = require("./config");
const client = new Client({ disableEveryone: true });

client.on("ready", () => {
  console.log("Je suis prêt !");
});

///// Message 
 
client.on("message", msg => {
  if (msg.content.startsWith(`${PREFIX}erthilia`)) msg.channel.send("Erthilia est actuellement en cours de développement!");
});

client.login(TOKEN);