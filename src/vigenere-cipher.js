const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  analizeString(string, key, encrypt) {
    if (!string || !key) {
      throw new Error("Incorrect arguments!");
    }

    string = string.toUpperCase();
    key = key.toUpperCase();

    let result = "";
    let index = 0;

    for (let i = 0; i < string.length; i++) {
      const char = string[i];

      if (char >= "A" && char <= "Z") {
        const paste = encrypt ? 1 : -1;
        const charCode =
          ((char.charCodeAt(0) -
            65 +
            paste * (key[index % key.length].charCodeAt(0) - 65) +
            26) %
            26) +
          65;
        result += String.fromCharCode(charCode);
        index++;
      } else {
        result += char;
      }
    }

    return this.direct ? result : result.split("").reverse().join("");
  }
  encrypt(message, key) {
    return this.analizeString(message, key, true);
  }
  decrypt(encryptedMessage, key) {
    return this.analizeString(encryptedMessage, key, false);
  }
}

module.exports = {
  VigenereCipheringMachine
};
