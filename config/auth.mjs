const { customAlphabet } = require('nanoid');
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';

const generateSecretKey = customAlphabet(alphabet, 32);

const key = {
  secretKey: generateSecretKey(),
};

module.exports= key;