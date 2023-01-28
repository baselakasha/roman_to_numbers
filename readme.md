## Roman Numerals To Numbers

In this project, I have practised my [Test Driven Development (TDD)](https://en.wikipedia.org/wiki/Test-driven_development) skills by programming a small javascript program the converts [Roman Numrals](https://en.wikipedia.org/wiki/Roman_numerals) to Arabic numbers (Normal Numbers).

You need [node.js](https://nodejs.org/en/) to run the program.

### I used [jest](https://jestjs.io/) for unit testing. to run the tests:

    npm run test

### Usage:

    const converter = require("./RomanToIntConverter");
    const my_num = converter.convert("XIV");
    console.log(my_num); // output: 14

If you pass an invalid input it will throw InvaildInput exception.
