/* Copyright (C) 2020 Black Amda.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

NaughtyAmdi - Black Amda
*/

const chalk = require('chalk');
const {WAConnection} = require('@adiwajshing/baileys');
const {StringSession} = require('./naughtyamdi/');
const fs = require('fs');

async function naughtyAmdi () {
    const conn = new WAConnection();
    const Session = new StringSession();  
    conn.logger.level = 'warn';
    conn.regenerateQRIntervalMs = 40000;
    
    conn.on('connecting', async () => {
        console.log(`${chalk.green.bold('Naughty')}${chalk.blue.bold('Amdi')}
${chalk.white.italic('Naughty Strings')}

${chalk.blue.italic('ℹ️  Connecting to Whatsapp... Please Wait.')}`);
    });
    

    conn.on('open', () => {
        var st = Session.createStringSession(conn.base64EncodedAuthInfo());
        console.log(
            chalk.green.bold('Amdi String: '), Session.createStringSession(conn.base64EncodedAuthInfo())
        );
        
        if (!fs.existsSync('config.env')) {
            fs.writeFileSync('config.env', `AMDI_SESSION="${st}"`);
        }

        console.log(
            chalk.blue.bold('Naughty Amdi loading bot.js')
        );
        process.exit(0);
    });

    await conn.connect();
}

naughtyAmdi()
