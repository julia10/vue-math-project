function Question(fractions, sign, status) {
    this.fractions = fractions;
    this.sign = sign;
    this.status = status; //'correct', 'incorrect', 'empty'
    this.answer = new Fraction(0, 0);

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
        let result = this.nominator / this.denominator
        return result;
    }
}