
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
        methods: {

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
                    <input v-model='nom' class="form-control">
                    <input v-model='den' class="form-control">
                </div>
                <div class="ml-2">
                    <span v-if="question.status == 'correct'">
                        <i class="fa fa-check fa-fw fa-2x text-success"></i>
                    </span>
                    <span v-else-if="question.status == 'incorrect'">
                    <i class="fa fa-times fa-fw fa-2x text-danger"></i>
                    </span>
                    <span v-else ></span>
                </div>
            </div>
        </div>
        `
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
                const sign = getRandomSign();
                this.questions.push(new Question([f1, f2], sign, 'empty'));
            }
        },

        component: [
            'fraction-question'
        ],
        methods: {
            checkResults() {
                const answers = this.questions.map(v => v.answer.getfloat());
                const correctAnswers = this.questions.map(v => v.getAnswer())
                for (let i = 0; i < answers.length; i++) {
                    if (answers[i].toFixed(2) === correctAnswers[i].toFixed(2)) {
                        this.questions[i].status = 'correct';
                    } else {
                        this.questions[i].status = 'incorrect';
                    }
                }

            }
        }
    })
}