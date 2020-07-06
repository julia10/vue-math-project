function createRandomFraction(difficulty) {
    const nom = getRandomNumber(difficulty);
    const den = getRandomNumber(difficulty);
    return new Fraction(nom, den);
}

function createRandomFloat(difficulty) {
    // If difficulty is 1 : 0.00 - 5.00
    // If difficulty is 2 : 0.00 - 10.00
    // If difficulty is 3 : 0.00 - 15.00
    let max = 15.0;
    let min = 0.0;

    if (difficulty === 1) {
        max = 5.00;
    } else if (difficulty == 2) {
        max = 10.00;
    }

    return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

function getfloat(nom, den) {
    return nom / den;
}

function getRandomFractionSign() {
    let signs = ['+', '-', '*', '/'];
    let randomId = Math.floor(Math.random() * (signs.length));
    return signs[randomId];
}

function getRandomFloatsSign() {
    let signs = ['+', '-'];
    let randomId = Math.floor(Math.random() * (signs.length));
    return signs[randomId];
}

function getRandomNumber(difficulty) {
    return Math.floor(Math.random() * difficulty) + 1;
}

function signToCalcFunc(sign) {
    if (sign === '+') {
        return (a, b) => a + b;
    } else if (sign === '-') {
        return (a, b) => a - b;
    } else if (sign === '*') {
        return (a, b) => a * b;
    } else if (sign === '/') {
        return (a, b) => a / b;
    }
}

function createFractionQuestions ( difficulty, amount ) {
    const questions = [];
    for (let i = 0; i < amount; i++) {
        const f1 = createRandomFraction(difficulty);
        const f2 = createRandomFraction(difficulty);
        const sign = getRandomFractionSign();
        questions.push(new FractionQuestion([f1, f2], sign, 'empty'));
    }
    return questions;
}

function createFloatQuestions (difficulty, amount ) {
    const questions = [];
    for (let i = 0; i < amount; i++) {
        const f1 = createRandomFloat(difficulty);
        const f2 = createRandomFloat(difficulty);
        const sign = getRandomFloatsSign();
        questions.push(new FloatQuestion([f1, f2], sign, 'empty'));
    }
    return questions;
}

function isValidFracNum(val) {
    if(val === undefined || val === null || val === 0) {
        return false;
    } else {
        return true;
    }
}