const { Client } = require("discord.js-selfbot-v13");

const client = new Client({
  checkUpdate: false
});

client.on("ready", async () => {
  console.log(`${client.user.username} online`);

  try {
    const channel = await client.channels.fetch("1508036708724248669");

    client.voice.joinChannel(channel, {
      selfMute: true,
      selfDeaf: true
    });

    console.log("Joined voice channel");
  } catch (err) {
    console.log(err);
  }
});

client.login(process.env.TOKEN);