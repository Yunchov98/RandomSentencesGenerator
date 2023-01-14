function randomSentencesGenerator() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    const names = ['Peter', 'Michell', 'Jane', 'Steve'];
    const places = ['Sofia', 'Plovdiv', 'Varna', 'Burgas'];
    const verbs = ['eats', 'holds', 'sees', 'plays with', 'brings'];
    const nouns = ['stones', 'cake', 'apple', 'laptop', 'bikes'];
    const adverbs = ['slowly', 'diligently', 'warmly', 'sadly', 'rapidly'];
    const details = ['near the river', 'at home', 'in the park'];

    function getRandomWord(array) {
        const word = array[Math.floor(Math.random() * array.length)];
        return word;
    }

    function randomMessage() {
        const randomName = getRandomWord(names);
        const randomPlace = getRandomWord(places);
        const randomVerb = getRandomWord(verbs);
        const randomNoun = getRandomWord(nouns);
        const randomAdverb = getRandomWord(adverbs);
        const randomDetail = getRandomWord(details);

        const who = `${randomName} from ${randomPlace}`;
        const action = `${randomAdverb} ${randomVerb} ${randomNoun}`;
        const sentence = `${who} ${action} ${randomDetail}.`;

        return sentence;
    }

    let finalSentence = randomMessage();

    console.log('Hello this is your first random-generated sentence:');
    console.log(finalSentence);

    const recursiveAsyncReadLine = function () {
        readline.question('Click [Enter] to generate a new one or write stop to end the program.', string => {
            if (string !== 'stop' && string.length > 0) {
                console.log("Wrong input. If u want to stop the program write 'stop'.");
                recursiveAsyncReadLine();
            } else if (string === 'stop') {
                console.log('Goodbye!');
                return readline.close();
            } else {
                console.log(randomMessage());
                recursiveAsyncReadLine();
            }
        });
    }

    recursiveAsyncReadLine();
}

randomSentencesGenerator();