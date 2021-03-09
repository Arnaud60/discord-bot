const config = require('./config.json')
const Discord = require('discord.js');
const { strike } = require('ffmpeg-static');

const bot = new Discord.Client()




bot.on('ready', () => {
  console.log('I am ready!');
});

bot.on('message', message => {
  if (message.content === '%fred') {
    lien = "https://cdn.radiofrance.fr/s3/cruiser-production/2020/03/d801357e-2463-47d5-89ea-fa6671003a36/1200x680_dpaphotosthree556489.jpg"
    const attachment = new Discord.MessageAttachment(lien)
    message.channel.send("Fred devrait niquer sa mère")
    message.channel.send("On vas l'aider: ")
    message.channel.send("https://fr.pornhub.com/video/search?search=marie+viviane")
    message.channel.send(attachment)
  }

  if (message.content === '%qui es tu ?') {
    lien = "https://www.superprof.fr/images/annonces/professeur-home-professeur-native-chinoise-donne-cours-chinois-niveaux-cherbourg-environs.jpg"
    const attachment = new Discord.MessageAttachment(lien)
    message.channel.send("Je suis la mère de Damien tu veux une petite gaterie ;)\nMes prix :\n10€ La branlette\n20€ La totale\n50€ La totale 30min\n100€ La totale une heure")
    message.channel.send(attachment)
  }

});

bot.on('message', async message => {
    if (!message.guild) return;
  
    if (message.content === '%bark') {
      if (message.member.voice.channel) {
        const connection = await message.member.voice.channel.join(); 
        const dispatcher = connection.play('./bark.mp3');
      } else {
        message.reply("T'es pas dans un channel fdp !");
      }
    }
  });

bot.login(process.env.TOKEN);