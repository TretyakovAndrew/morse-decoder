const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const morseVoc = {
        '10': '.',
        '11': '-',
    };
    const wordsCode = expr.split('**********');
    let result = [];

    for (elem of wordsCode) {
        let elemArr = elem.split('');
        let word = '';

        while (elemArr.length != 0) {
            let morseLetter = '';
            let letter = elemArr.splice(0, 10).join('');
        
            letter = letter.replace(/^0+/, '');

            for (let i = 0; i < letter.length; i += 2) {
                let el = letter.slice(i, i + 2);
                morseLetter += morseVoc[el];
            }
            word += MORSE_TABLE[morseLetter];
        }
        result.push(word);
    }

    return result.join(' ');
}

module.exports = {
    decode
}