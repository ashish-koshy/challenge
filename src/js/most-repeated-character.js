const mostRepeatedCharacter = (input = '') => {
    let result = '';
    if (input.length > 100) return result;

    let maxRepetiton = 0;
    const repetition = new Map();
    const list = input.split('').filter(item => /[a-zA-Z]/.test(item));

    for (const char of list) {
        if (repetition.has(char)) {
            const charCount = repetition.get(char) + 1;
            repetition.set(char, charCount);
            if (charCount > maxRepetiton) {
                maxRepetiton = charCount;
                result = char;
            }
        }
        else
            repetition.set(char, 1);
    }
    
    return result;
};

console.log(mostRepeatedCharacter('abcddefda1111133333333'));
console.log(mostRepeatedCharacter('AA0AB0BB0ccc0aa0aw00wo0BBBw123123'));