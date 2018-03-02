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
  if (message.content.toLowerCase().startsWith(prefix + "zcute")) {
    message.channel.send("A-Ah... Zaire, that's... embarassing...");
  } else
  if (message.content.toLowerCase().startsWith(prefix + "akeno")) {
    message.channel.send("The best twin, brother, friend and bunk buddy EVER! If he ever left my side, I'd be lost as hell.");
  } else
  if (message.content.toLowerCase().startsWith(prefix + "zaire")) {
    message.channel.send("Ahuu... Well... I.... Heheh... I love him a lot! Some people might not like  him but... He's really kind, handsome, funny, charming... I don't know what I'd do without him!");
  } else
  if (message.content.toLowerCase().startsWith(prefix + "tsuki")) {
    message.channel.send("My one and only daughter! She's adopted, sure, but.... That doesn't mean I don't love her as much as I would if she was blood related. She's special to me, and... I think she's a sign that me and Zaire work together fine, despite our differences.");
  } else
  if (message.content.toLowerCase().startsWith(prefix + "mizuki")) {
    message.channel.send("Momzuki! More of a mom than my own mom, honestly. I know she doesn't really like Zaire much, at least from what I can tell, but... I'm glad I have her as a friend. She's very important to me.");
  } else
  if (message.content.toLowerCase().startsWith(prefix + "space")) {
    message.channel.send("**AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA**");
  } else
  if (message.content.toLowerCase().startsWith(prefix + "smooch")) {
    message.channel.send("A-Ahh! H-Hey! I have a significant other! I-I'm not a cheater, so please don't do that...");
  } else
  if (message.content.toLowerCase().startsWith(prefix + "zsmooch")) {
    message.channel.send("Hehehe... Thanks, Zaire. I love you too... Hehe.:sparkling_heart:");
      
      //prompt commands
      
  } else
  if (message.content.toLowerCase() === "i love jiro") {
      message.channel.send("Really? I'm flattered! I love you too- well, not in the romantic way of course! Unless you're... hehe...");
      
      //flirts
      
  } else
  if (message.content.toLowerCase() === "is that a telescope in your pants or are you just happy to see me?") {
      message.channel.send("Hehehe you can't fit a telescope in your pants, silly!");
  }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
