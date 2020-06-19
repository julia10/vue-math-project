function Question(fraction1, fraction2, sign) {
    this.fractions = [fraction1, fraction2];
    this.sign = sign;
    this.answer = new Fraction(0, 0);

    this.getAnswer = function () {
        if (this.sign == '+') {
            return fraction1.getfloat() + fraction2.getfloat();

        } else if (this.sign == '-') {
            return fraction1.getfloat() - fraction2.getfloat();

        } else if (this.sign == '*') {
            return fraction1.getfloat() * fraction2.getfloat();

        } else if (this.sign == '/') {
            return fraction1.getfloat() / fraction2.getfloat();
        }
    }
}

function Fraction(nom, den) {

    this.nominator = nom;
    this.denominator = den;
    this.getfloat = function(){
        return this.nominator / this.denominator;
    }
}