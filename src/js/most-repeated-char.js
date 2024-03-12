const mostRepeatedCharacter = (input = '') => {
    let maxRepetiton = 0;
    let result = '';
    const repetition = new Map();
    const list = input.split('').filter(item => isNaN(item));
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
    console.log(result);
};

mostRepeatedCharacter('abcddefda1111133333333');
mostRepeatedCharacter('AA0AB0BB0ccc0aa0aw00wo0BBBw123123');