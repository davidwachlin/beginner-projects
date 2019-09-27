// ### 99 Bottles
// - Create a program that prints out every line to the song "99 bottles of beer on the wall."
// - Do not use a list for all of the numbers, and do not manually type them all in. Use a built in function instead.
// - Besides the phrase "take one down," you may not type in any numbers/names of numbers directly into your song lyrics.
// - Remember, when you reach 1 bottle left, the word "bottles" becomes singular.

function sing99Bottles(num) {
    for (let i = num; i >= 0; i--) {
        if (i > 1) {
            console.log(`${i} bottles of beer on the wall, ${i} bottles of beer, you take one down, you pass it around, ${i} bottles of beer on the wall`);
        } else if (i === 1) {
            console.log(`${i} bottle of beer on the wall, ${i} bottle of beer, you take it down, you pass it around, ${i} bottle of beer on the wall`);
        } else if (i === 0) {
            num = "No"
            console.log(`${num} bottles of beer on the wall, ${num} bottles of beer, you take one down, you pass it around, ${num} bottles of beer on the wall`);
            return;
        }
    }
}

// let inputNumber = document.getElementById('inputNum').value;
let singButton = document.getElementById('singButton');

singButton.addEventListener('click', () => {
    let inputNumber = document.getElementById('inputNum').value;
    sing99Bottles(inputNumber)
});
