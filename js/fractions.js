
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
                den: '',

                //Icons for correct or incorrect inputs
                correct: '<i class="fa fa-check fa-fw fa-2x" id="icons" aria-hidden="true"></i>',
                incorrect: '<i class="fa fa-times fa-fw fa-2x" id="icons" aria-hidden="true"></i>',
                
                feedback: ''
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
        methods: {
            checkAnswer: function() {
                //Checking if there is den assigned by user
                if(this.question.answer.nominator != 0 && this.question.answer.denominator != 0) {
                    //Checking if result is true
                    if(this.question.answer.getfloat().toFixed(2) == this.question.getAnswer()){
                        this.feedback = this.correct;
                    } else {
                        this.feedback = this.incorrect;
                    }
                }
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
            <td><button class="btn" @click="checkAnswer"> <i class="fa fa-question" style="font-size:20px"></i></button></td>
            <td v-html='feedback'>
          
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
                    if(answers[i].getfloat()  === correctAnswers[i] ){
                        console.log("Q" + i + ' is true');
                    }
                    else{
                        console.log("Q" + i + ' is false');
                    }
                    console.log('answers[i].float ' + answers[i].getfloat() );
                    console.log('correctAnswers[i] ' + correctAnswers[i] );
                }
                
            }
        }
    })
}