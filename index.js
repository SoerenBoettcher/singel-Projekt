import readline from "readline-sync"
import {  wordCounter, uniqueWords, searchLongestWord } from "./function.js";

function ausfuehren () {
    const text = readline.question("Geben Sie bitte hier Ihren Text ein: ");
    const wordsCount = wordCounter(text);
    const uniqueWord = uniqueWords(text);
    const longWord = searchLongestWord(text);

    console.log(`Die Anzahl an Wörtern im Text sind: ${wordsCount}`);
    console.log(`Die Anzahl der unterschiedlichen Wörter im Text sind: ${uniqueWord}`);
    console.log(`Das längste wort im Text ist: ${longWord}`);
}
ausfuehren()

