const fs = require('fs')
const chalk = require('chalk')
//—————「 configurar vcard 」—————//
global.youtube = 'https://yotube.com/@VenomKuromi'
global.ig = '@Sem' 
global.email = 'VenomMods2023@gmail.com' 
global.region = 'brasil' 
//—————「 configurar dono/bot 」—————//
global.nomedodono = 'Kuromi' //
global.nomedobot = 'Kuromi Bot' 
global.dono = ['559784388524']
global.sourceUrlDono = `https://youtube.com/@VenomKuromi`
global.packnome = 'Feito por:' 
global.author = 'Kuromi Bot' 
global.prefixos = ['','!','#']
global.text_bemvindo = `Ola seja bem-vindo ao privado da Kuromi bot para usar minhas funções digite .menu tenho vários comandos e métodos espero que goste das minha funçoes
aproveite e se inscreva no nosso canal pra fica por dentro de todas novidades e atualizaçãoes de bot e imune 🌸
Canal oficial: https://YouTube.com/@VenomModss
Cabal secundário: https://YouTube.com/@VenomKuromi`
global.reação = '🌸'
//—————「 configurar json 」—————//
global.bemvindo = []
global.salvarantipalavrao = []
global.antilink = []
global.Autofigu = true
global.AntiCtt = true
global.AntiLoc = true
// configurar respostas
global.resposta = 
{
    dono: '*Este❗ comando só pode ser usado pela mamãe kuromi!!*',
    grupo: '*Este❗ comando só fociona em grupos!!*',
    vip: '*❗Este comando so pode ser utilizado por usuarios vip*\n*caso queira comprar seu pacote vip entre em contato com a mamãe kuromi*\n*https://wa.me/559784388524*',
    adm: '*Este❗ comando so funciona com adms do grupo!!*',
    botadm: '*Preciso❗ ser adm pra executar este comando!!*'
 }

// configurar fotos
global.thumb = fs.readFileSync("./dados/imagem/kuromi.jpg")
global.thumbmenu = fs.readFileSync("./dados/imagem/kuromi.jpg")
global.thumbvenom = fs.readFileSync("./dados/imagem/kuromi.jpg")


// documentos aleatório
global.venomdoc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.venomdoc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.venomdoc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.venomdoc4 = 'application/zip'
global.venomdoc5 = 'application/pdf'
global.venomdoc6 = 'application/vnd.android.package-archive'
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`'${__filename} Foii editado!!'`))
	delete require.cache[file]
	require(file)
})
