function decodeMorse(morseCode) {
    morseCode = morseCode.trim();
    
    let words = morseCode.split('   ');
    
    let decodedWords = words.map(word => {
        return word.split(' ').map(symbol => MORSE_CODE[symbol]).join('');
    });
    
    return decodedWords.join(' ');
}