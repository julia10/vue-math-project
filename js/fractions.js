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
        nom: 5,
        den: 10
      }
    },
    template: ` 
    <table>
    <tbody>
        <tr>
            <td >
                <fraction :nominator='nom' :denominator='den'></fraction>
            </td>
            <td> + </td>
            <td>
              <fraction :nominator='nom' :denominator='den'></fraction>
            </td>
            <td> = </td>
            <td>
              <table>
                <tbody>
                  <tr>
                    <td class="nominator"> <input></td>
                  </tr>
                  <tr>
                    <td><input></td>
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
      questions = []
    },
    computed: {
      questions
    },
    methods: {
      createQuestions: function(){
        let difficulty = 10;
        const q1 = new Question(new Fraction(difficulty), new Fraction(difficulty), getRandomSign());
        const q2 = new Question(new Fraction(difficulty), new Fraction(difficulty), getRandomSign());
        const q3 = new Question(new Fraction(difficulty), new Fraction(difficulty), getRandomSign());
        return [q1, q2, q3];
      }
    }
  })


  function Question(fraction1, fraction2, sign) {
    this.fractions = [fraction1, fraction2];
    this.sign = sign;
    this.getAnswer = function () {
      if (this.sign == '+') {
        return fraction1.getfloat + fraction2.getfloat;

      } else if (this.sign == '-') {
        return fraction1.getfloat - fraction2.getfloat;

      } else if (this.sign == '*') {
        return fraction1.getfloat * fraction2.getfloat;

      } else if (this.sign == '/') {
        return fraction1.getfloat / fraction2.getfloat;
      }
    }
  }

  function Fraction(difficulty) {

    this.nominator = getRandomNumber(difficulty);
    this.denominator = getRandomNumber(difficulty);
    this.getfloat = function() {
      return nominator / denominator;
    }

  }

  function getRandomSign() {
    let signs = ['+', '-', '*', '/'];
    let randomId = Math.floor(Math.random() * (signs.length));
    return signs[randomId];
  }

  function getRandomNumber(difficulty) {
    return Math.floor(Math.random() * difficulty);
  }


}