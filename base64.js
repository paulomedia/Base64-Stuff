const fs  = require('fs'),
      enc = 'base64';

module.exports = {
    base64Encode: file => {
        const bitmap = fs.readFileSync(file);
        return new Buffer(bitmap).toString(enc);
    },

    base64Decode: (strBase64, file) => {
        const bitmap = new Buffer(strBase64, enc);
        fs.writeFileSync(file, bitmap);
    }
}