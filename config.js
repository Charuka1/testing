const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {
SESSION_ID: 'IZUMI=PuZ0QJhY#4lzQYliGq6DiXkETMFCN7EHJVDxhA9Xrg4ohlNQNcPU'
};
