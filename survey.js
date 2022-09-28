const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const q0 = 'What\'s your name? Nicknames are also acceptable. ';
const q1 = 'What\'s an activity you like doing? ';
const q2 = 'What do you listen to while doing that? ';
const q3 = 'Which meal is your favourite (eg: dinner, brunch, etc.) ';
const q4 = 'What\'s your favourite thing to eat for that meal? ';
const q5 = 'Which sport is your absolute favourite? ';
const q6 = 'What is your superpower? In a few words, tell us what you are amazing at! ';

let questionArr = [q0, q1, q2, q3, q4, q5, q6];
let introKeys = [];

const ask = i => {
  if (i < questionArr.length) {
    rl.question(questionArr[i], (answer) => {
      introKeys.push(answer);
      ask(i + 1);
    });
  } else {
    console.log(`${introKeys[0]} loves listening to ${introKeys[2]} while ${introKeys[1]}, devouring ${introKeys[4]} for ${introKeys[3]}, prefers ${introKeys[5]} over any other sport, and is amazing at ${introKeys[6]}} at inopportune times.`);
    rl.close();
  }
};

// invoke the function
ask(0);

