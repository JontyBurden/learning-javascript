const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// prompt for question
let question = rl.question("Ask anything and recive a response");

// magic 8 ball responses
let responses = ["As I see it, yes.", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.", "Don't count on it.",
 "It is certain.", "It is decidedly so."];

// conditional statement testing questions input
if (question.length > 0); {
    console.log("Question input is working")
}