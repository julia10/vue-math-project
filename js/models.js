function FractionQuestion(fractions, sign, status) {
    this.fractions = fractions;
    this.sign = sign;
    this.status = status; //'correct', 'incorrect', 'empty'
    this.answer = {
        nom: '',
        den: ''
    };

    this.getAnswer = () => {
        const calcFunc = signToCalcFunc(this.sign);
        const floatValues = this.fractions.map(v => v.getfloat());
        const result = floatValues.reduce((total, curentValue) => {
            if(total === null) {
                return curentValue;
            } else {
                return calcFunc(total, curentValue);
            }
        }, null);
        return result;
    }
}

function Fraction(nom, den) {

    this.nominator = nom;
    this.denominator = den;

    this.getfloat =  () => {
        return this.nominator / this.denominator;
    }
}


function FloatQuestion(floats, sign, status) {
    this.floats = floats;
    this.sign = sign;
    this.status = status; //'correct', 'incorrect', 'empty'
    this.userAnswer;

    this.getAnswer = () => {
        const calcFunc = signToCalcFunc(this.sign);
        const result = floats.reduce((total, curentValue) => {
            if(total === null) {
                return curentValue;
            } else {
                return calcFunc(total, curentValue);
            }
        }, null);
        return parseFloat(result.toFixed(2));
    }
}