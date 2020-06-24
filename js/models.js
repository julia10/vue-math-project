function Question(fraction1, fraction2, sign) {
    this.fractions = [fraction1, fraction2];
    this.sign = sign;
    this.answer = new Fraction(0, 0);

    this.getAnswer = function () {
        let result = 0;
        if (this.sign == '+') {
            result = (fraction1.getfloat() + fraction2.getfloat()).toFixed(2);

        } else if (this.sign == '-') {
            result = (fraction1.getfloat() - fraction2.getfloat()).toFixed(2);

        } else if (this.sign == '*') {
            result = (fraction1.getfloat() * fraction2.getfloat()).toFixed(2);

        } else if (this.sign == '/') {
            result = (fraction1.getfloat() / fraction2.getfloat()).toFixed(2);
        }

        return result;

    }
}

function Fraction(nom, den) {

    this.nominator = nom;
    this.denominator = den;
    this.getfloat = function(){
        return this.nominator / this.denominator;
    }
}