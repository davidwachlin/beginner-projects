// ### 99 Bottles
// - Create a program that prints out every line to the song "99 bottles of beer on the wall."
// - Do not use a list for all of the numbers, and do not manually type them all in. Use a built in function instead.
// - Besides the phrase "take one down," you may not type in any numbers/names of numbers directly into your song lyrics.
// - Remember, when you reach 1 bottle left, the word "bottles" becomes singular.

function sing99Bottles(num) {
	for (let i = num; i >= 0; i--) {
		if (i > 1) {
			console.log(
				`${i} bottles of beer on the wall, ${i} bottles of beer, you take one down, you pass it around, ${i} bottles of beer on the wall`
			);
		} else if (i === 1) {
			console.log(
				`${i} bottle of beer on the wall, ${i} bottle of beer, you take it down, you pass it around, ${i} bottle of beer on the wall`
			);
		} else if (i === 0) {
			num = 'No';
			console.log(
				`${num} bottles of beer on the wall, ${num} bottles of beer, you take one down, you pass it around, ${num} bottles of beer on the wall`
			);
			return;
		}
	}
}

// let inputNumber = document.getElementById('inputNum').value;
let singButton = document.getElementById('singButton');

singButton.addEventListener('click', () => {
	let inputNumber = document.getElementById('inputNum').value;
	sing99Bottles(inputNumber);
});

// ### Magic 8 Ball
// - Simulate a magic 8-ball.
// - Allow the user to enter their question.
// - Display an in progress message(i.e. "thinking").
// - Create 20 responses, and show a random response.
// - Allow the user to ask another question or quit.
// - Bonus:
//   - Add a gui.
//   - It must have box for users to enter the question.
//   - It must have at least 4 buttons:
//     - ask
//     - clear (the text box)
//     - play again
//     - quit (this must close the window)

const answers = [
	'As I see it, yes.',
	'Ask again later.',
	'Better not tell you now.',
	'Cannot predict now.',
	'Concentrate and ask again.',
	'Don’t count on it.',
	'It is certain.',
	'It is decidedly so.',
	'Most likely.',
	'My reply is no.',
	'My sources say no.',
	'Outlook not so good.',
	'Outlook good.',
	'Reply hazy, try again.',
	'Signs point to yes.',
	'Very doubtful.',
	'Without a doubt.',
	'Yes.',
	'Yes – definitely.',
	'You may rely on it.'
];

let askButton = document.getElementById('askButton');
askButton.addEventListener('click', askQuestion);

function answer() {
    let newAnswer = answers[Math.floor(Math.random() * answers.length + 1)];
    document.getElementById('response').textContent = newAnswer;
}

function askQuestion() {
    console.log('8 ball click')
    let question = document.getElementById('inputQuestion').value;
    let response = 'Thinking ...';
    document.getElementById('question').textContent = question;
    document.getElementById('response').textContent = response;
    setTimeout(answer, 4000);
}
