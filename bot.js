const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});
// Set the prefix
const prefix = "j!";
client.on("message", (message) => {
    
    //prefix commands
    
  if (message.content.toLowerCase().startsWith(prefix + "ping")) {
    message.channel.send("Ping...? Oh- OH! Pong!");
  } else
  if (message.content.toLowerCase().startsWith(prefix + "foo")) {
    message.channel.send("Uhh... fighters?");
  } else
  if (message.content.toLowerCase().startsWith(prefix + "cute")) {
    message.channel.send("Ahahaha, thank you!");
  } else
  if (message.content.toLowerCase().startsWith(prefix + "akeno")) {
    message.channel.send("The best twin, brother, friend and bunk buddy EVER! If he ever left my side, I'd be lost as hell.");
  } else
  if (message.content.toLowerCase().startsWith(prefix + "zaire")) {
    message.channel.send("Ahuu... Well... I.... Heheh... I love him a lot! Some people might not like  him but... He's really kind, handsome, funny, charming... I don't know what I'd do without him!");

      //prompt commands
  } else
  if (message.content.toLowerCase() === "i love jiro") {
      message.channel.send("Really? I'm flattered! I love you too- well, not in the romantic way of course! Unless you're... hehe...");
  }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
