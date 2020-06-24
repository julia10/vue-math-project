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
