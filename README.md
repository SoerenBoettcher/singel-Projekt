# singel-Projekt

## Textanalyse-Tool

### Code Erläuterung der index.js

1. import readline from "readline-sync": Dies importiert die readline-Synchronisationsbibliothek, die es ermöglicht, Texteingaben von Benutzern in der Konsole zu lesen.

2. import { wordCounter, uniqueWords, searchLongestWord } from "./function.js";: Dies importiert die Funktionen wordCounter, uniqueWords und searchLongestWord aus der Datei function.js, die sich im selben Verzeichnis wie die aktuelle Datei befindet. Diese Funktionen werden verwendet, um verschiedene Operationen auf dem eingegebenen Text durchzuführen.

3. function ausfuehren() {...}: Dies ist eine Funktion namens ausfuehren, die den Benutzer zur Eingabe eines Textes auffordert, dann die importierten Funktionen verwendet, um verschiedene Operationen auf diesem Text durchzuführen, und schließlich die Ergebnisse ausgibt.

4. const text = readline.question("Geben Sie bitte hier Ihren Text ein: ");: Hier wird der Benutzer aufgefordert, einen Text einzugeben, der von der Konsole eingelesen und in der Variablen text gespeichert wird.

5. const wordsCount = wordCounter(text);: Diese Zeile ruft die importierte Funktion wordCounter auf, um die Anzahl der Wörter im eingegebenen Text zu zählen, und speichert das Ergebnis in der Variablen wordsCount.

6. const uniqueWord = uniqueWords(text);: Diese Zeile ruft die importierte Funktion uniqueWords auf, um die Anzahl der eindeutigen Wörter im eingegebenen Text zu zählen, und speichert das Ergebnis in der Variablen uniqueWord.

7. const longWord = searchLongestWord(text);: Diese Zeile ruft die importierte Funktion searchLongestWord auf, um das längste Wort im eingegebenen Text zu finden, und speichert das Ergebnis in der Variablen longWord.

8. console.log(Die Anzahl an Wörtern im Text sind: ${wordsCount});: Hier wird die Anzahl der Wörter im Text ausgegeben.

9. console.log(Die Anzahl der unterschiedlichen Wörter im Text sind: ${uniqueWord});: Hier wird die Anzahl der eindeutigen Wörter im Text ausgegeben.

10. console.log(Das längste Wort im Text ist: ${longWord});: Hier wird das längste Wort im Text ausgegeben.

11. ausfuehren(): Schließlich wird die Funktion ausfuehren aufgerufen, um den gesamten Prozess auszuführen und das Programm zu starten.


### Code Erläuterung der function.js

1. export function textToWords(text) {: Dies definiert eine exportierte Funktion namens textToWords, die einen Parameter text annimmt. Diese Funktion kann aus einem anderen Modul importiert werden.

const textArr = text.split(" ");: Diese Zeile teilt den übergebenen Text in Wörter auf. Die split()-Methode wird verwendet, um den Text in Teile zu zerlegen, wobei das Leerzeichen als Trennzeichen verwendet wird. Das Ergebnis ist ein Array von Wörtern, das in der Konstanten textArr gespeichert wird.

return textArr;: Die Funktion gibt das Array textArr zurück, das die Wörter des ursprünglichen Textes enthält.

2. wordCounter(text): Diese Funktion ruft textToWords(text) auf, um alle Wörter im Text zu erhalten, und gibt dann die Anzahl der Wörter zurück, die im Text gefunden wurden.

3. uniqueWords(text): Diese Funktion verwendet auch textToWords(text), um alle Wörter im Text zu erhalten, und erstellt dann ein Set (eine Datenstruktur in JavaScript, die nur eindeutige Werte zulässt) aus diesen Wörtern. Die Größe des Sets wird dann zurückgegeben, was die Anzahl der einzigartigen Wörter im Text darstellt.

4. searchLongestWord(text): Diese Funktion teilt den Text in Wörter auf und sucht nach dem längsten Wort im Text. Dazu wird der Text an den Leerzeichen geteilt, und dann wird in einer Schleife jedes Wort überprüft, um das längste Wort zu finden.