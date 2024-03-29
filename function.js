import readline from "readline-sync"

export function textToWords(text) {
    const textArr = text.split(" ");
    return textArr;
}

export function wordCounter (text) {
    const words = textToWords(text);
    return words ? words.length : 0;
}

export function uniqueWords (text) {
    const words = textToWords(text);

    if (!words) return 0;
    const unique = new Set(words);
    return unique.size;
}

export function searchLongestWord(text) {
    const words = text.split(' ');
    let longestWord = "";
    
    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}