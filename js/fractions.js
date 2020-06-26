
window.onload = function () {

    Vue.component('fraction', {
        props: ['nominator', 'denominator'],
        template: `
        <div class="d-flex flex-column align-items-center flex-fill">
            <span>{{ nominator }}</span>
            <span>---</span>
            <span>{{ denominator }}</span>
        </div>
    `
    })

    Vue.component('fraction-question', {
        data: function () {
            return {
                nom: this.question.answer.nom,
                den: this.question.answer.den
            }
        },
        props: ['question'],
        watch: {
            nom: function (val) {
                this.question.answer.nom = val;
            },
            den: function (val) {
                this.question.answer.den = val;
            }
        },
        methods: {

        },
        updated() {
            this.nom = this.question.answer.nom;
            this.den = this.question.answer.den;
        },
        template: ` 
        <div>
            <div class="d-flex align-items-center justify-content-center">
                <div v-for="(f, index) of question.fractions" class="d-flex align-items-center">
                    <fraction
                    :nominator='f.nominator'
                    :denominator='f.denominator'></fraction>
                    <span v-if="index !== question.fractions.length - 1" class="mx-2">{{ question.sign }}</span>
                </div>
                <span class="mx-2"> = </span>
                <div class="d-flex flex-column">
                    <input type="number" v-model='nom' class="form-control">
                    <input type="number" v-model='den' class="form-control">
                </div>
                <div class="ml-2">
                    <span v-if="question.status == 'correct'">
                        <i class="fa fa-check fa-fw fa-2x text-success"></i>
                    </span>
                    <span v-else-if="question.status == 'incorrect'">
                        <i class="fa fa-times fa-fw fa-2x text-danger"></i>
                    </span>
                    <span v-else >
                        <i class="fa fa-question fa-fw fa-2x" ></i>
                    </span>
                </div>
            </div>
        </div>
        `
    })

    var app = new Vue({
        el: "#fractions-app",
        data: {
            questions: [],

            difficulty: 10,
            amount: 3
        },
        created: function () {
            //Fill in the array with three question fractions
            this.createQuestions();
        },

        component: [
            'fraction-question'
        ],
        methods: {
            checkResults() {
                let qi = 1;
                for (const question of this.questions) {
                    const answer = question.answer;
                    if (answer.nom === '' && answer.den === '') {
                        question.status = 'empty';
                    } else if (isValidFracNum(answer.nom) && isValidFracNum(answer.den)) {
                        const fract = new Fraction(answer.nom, answer.den);
                        const enteredResult = fract.getfloat();
                        const correctResult = question.getAnswer();
                        if (enteredResult.toFixed(2) === correctResult.toFixed(2)) {
                            question.status = 'correct';
                        } else {
                            question.status = 'incorrect';
                        }
                    }
                    console.log(`Answer ${qi++}:`, answer);
                }
            },

            createQuestions() {
                this.questions = createFractionQuestions(this.difficulty, this.amount);
            }
        }
    })
}