window.onload = function () {

  Vue.component('fraction', {
    props: ['nominator', 'denominator'],
    template: `
    <table>
      <tbody>
        <tr>
          <td class="nominator">  {{nominator}} </td>
        </tr>
        <tr>
          <td>  {{denominator}} </td>
        </tr>
      </tbody>
    </table>
    `
  })


  Vue.component('fraction-question', {
    data: function () {
      return {
        nom : '',
        den : ''
      }
    },
    props: ['question'],
    template: ` 
    <table>
    <tbody>
        <tr>
            <td >
                <fraction :nominator='question.fractions[0].nominator' :denominator='question.fractions[0].denominator'></fraction>
            </td>
            <td> {{ question.sign }} </td>
            <td>
              <fraction :nominator='question.fractions[1].nominator' :denominator='question.fractions[1].denominator'></fraction>
            </td>
            <td> = </td>
            <td>
              <table>
                <tbody>
                  <tr>
                    <td class="nominator"> <input v-model='nom'></td>
                  </tr>
                  <tr>
                    <td><input v-model='den'></td>
                  </tr>
                </tbody>
              </table>
            </td>
        </tr>
    </tbody>
</table>`
  })

  var app = new Vue({
    el: "#fractions-app",
    data: {
      questions: [],
      correctAnswers: []
    },
    created: function () {

      //Fill in the array with three question fractions
      let difficulty = 10;
      for(let i = 0; i < 3; i++) {
        this.questions.push(new Question(new Fraction(difficulty), new Fraction(difficulty), getRandomSign()));
      }

      //Fill in the array with correct answers
      for(let i = 0; i < 3; i++) {
        this.correctAnswers.push (this.questions[i].getAnswer());
      }
    },

    component: [
      'fraction-question'
    ],
    methods: {

    }
  })


  function Question(fraction1, fraction2, sign) {
    this.fractions = [fraction1, fraction2];
    this.sign = sign;
    this.getAnswer = function () {
      if (this.sign == '+') {
        return fraction1.float + fraction2.float;

      } else if (this.sign == '-') {
        return fraction1.float - fraction2.float;

      } else if (this.sign == '*') {
        return fraction1.float * fraction2.float;

      } else if (this.sign == '/') {
        return fraction1.float / fraction2.float;
      }
    }
  }

  function Fraction(difficulty) {

    this.nominator = getRandomNumber(difficulty);
    this.denominator = getRandomNumber(difficulty);
    this.float = getfloat (this.nominator, this.denominator);
  }

  function getfloat (nom, den) {
    return nom/den;
  }

  function getRandomSign() {
    let signs = ['+', '-', '*', '/'];
    let randomId = Math.floor(Math.random() * (signs.length));
    return signs[randomId];
  }

  function getRandomNumber(difficulty) {
    return Math.floor(Math.random() * difficulty) + 1;
  }


}