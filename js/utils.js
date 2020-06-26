function createRandomFraction(difficulty) {
    const nom = getRandomNumber(difficulty);
    const den = getRandomNumber(difficulty);
    return new Fraction(nom, den);
}

function getfloat(nom, den) {
    return nom / den;
}

function getRandomSign() {
    let signs = ['+', '-', '*', '/'];
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
        const sign = getRandomSign();
        questions.push(new Question([f1, f2], sign, 'empty'));
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