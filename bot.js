//Бот от мелкого, что может быть хуже?
const Discord = require('discord.js');
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
const fs = require ('fs');
let config = require('./botconfig.json');
let token = config.token;
let prefix = config.prefix;
//Включение бота
bot.on('ready', () => {
    console.log(`${bot.user.username} вошёл в сеть!`);
 //Статус бота
  bot.user.setStatus('available')
  bot.user.setPresence({
      game: {
          name: 'На протяжении 8962 чаосв',
          type: "STREAMING",
          url: "https://www.twitch.tv/9ba1ter"
      }
    });
 //Получение id каналов
    bot.guilds.forEach((guild) => {
        console.log(guild.name)
        guild.channels.forEach((channel) => {
            console.log(` - ${channel.name} ${channel.type} ${channel.id}`)
        })
    //Кол-во юзеров - 629277848741609475
    //🤖Всего ботов - 629278223993274379
    //🔊Голосовой онлайн - 629279171599794196
    });
});
//Голосовой онлайн
bot.on('voiceStateUpdate', (oldMember, newMember) => {
    let newUserChannel = newMember.voiceChannel;
    let oldUserChannel = oldMember.voiceChannel;
    let voicetext = "🔊 Голосовой онлайн: "
    let ch = bot.channels.get("629279171599794196");
    if(newUserChannel && !oldUserChannel){
        ch.setName(`${voicetext}${newMember.guild.members.filter(m => m.voiceChannel).size}`);
    };
    if(!newUserChannel && oldUserChannel){
        ch.setName(`${voicetext}${newMember.guild.members.filter(m => m.voiceChannel).size}`);
    };
});
//Статистика каналов
async function test1() {
    bot.channels.find(c => c.id === "629277848741609475").setName(`Кол-во юзеров: ${bot.guilds.get('617378784257114112').members.size}`);
    bot.channels.find(c => c.id === "629278223993274379").setName(`🤖 Всего ботов: ${bot.guilds.get('айди сервера').members.filter(mem => mem.user.bot === true).size}`);
}; setInterval(test1, 30000)

bot.login(token);