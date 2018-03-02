const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});
// Set the prefix
const prefix = "j!";
client.on("message", (message) => {
    
    //all my random shit
    
  if (message.content.toLowerCase().startsWith(prefix + "ping")) {
    message.channel.send("Ping...?");
  } else
  if (message.content.toLowerCase().startsWith(prefix + "foo")) {
    message.channel.send("Uhh... fighters?");
  } else
  if (message.content.toLowerCase().startsWith(prefix + "cute")) {
    message.channel.send("Ahahaha, thank you!");
  }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
