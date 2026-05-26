const { Client } = require("discord.js-selfbot-v13");

const client = new Client({
  checkUpdate: false
});

process.on("uncaughtException", (err) => {
  console.log("Ignored error:", err.message);
});

client.on("ready", async () => {
  console.log(`${client.user.username} online`);

  try {
    const channel = await client.channels.fetch("563674347990941717");

    client.voice.joinChannel(channel, {
      selfMute: true,
      selfDeaf: true,
      selfVideo: false
    });

    console.log("Joined voice channel");
  } catch (err) {
    console.log("VC Error:", err.message);
  }
});

client.login(process.env.TOKEN);