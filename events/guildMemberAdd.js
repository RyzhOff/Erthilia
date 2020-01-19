
module.exports = (client, member) => {
  member.send("Bienvenue a toi sur Erthilia le serveur est actuellement en cours de Développement toute les informations serons donné dans la salon Annonces");
  const channel = client.channels.find(r => r.name === "accueil");
  channel.send(`${member} a rejoint le serveur Erthilia bienvenue a lui !`);
};