
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
                nom: '',
                den: ''
            }
        },
        props: ['question'],
        watch: {
            nom: function (val) {
                this.question.answer.nominator = val;
            },
            den: function (val) {
                this.question.answer.denominator = val;
            }
        },
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
            questions: []
        },
        created: function () {

            //Fill in the array with three question fractions
            let difficulty = 10;
            for (let i = 0; i < 3; i++) {
                const f1 = createRandomFraction(difficulty);
                const f2 = createRandomFraction(difficulty);
                this.questions.push(new Question(f1, f2, getRandomSign()));
            }
        },

        component: [
            'fraction-question'
        ],
        methods: {
            checkResults() {
                const answers = this.questions.map(v => v.answer);
                const correctAnswers = this.questions.map(v => v.getAnswer())
                for(let i = 0; i < answers.length; i++){
                    if(answers[i].getfloat().toFixed(2) === correctAnswers[i].toFixed(2)){
                        console.log("Q" + i + ' is true');
                    }
                    else{
                        console.log("Q" + i + ' is false');
                    }
                    console.log('answers[i].float.toFixed(2)' + answers[i].getfloat().toFixed(2));
                    console.log('correctAnswers[i].toFixed(2)' + correctAnswers[i].toFixed(2));
                }
                
            }
        }
    })
}