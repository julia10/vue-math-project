window.onload = function () {


    Vue.component('float-question', {
        props : ['question'],

        template : `
        <div class="d-flex align-items-center justify-content-center m-2">

            <div v-for="(float, index) of question.floats" class="d-flex align-items-center">
                    {{float}}
                    <span v-if="index !== question.floats.length - 1" class="mx-2">{{ question.sign }}</span>
            </div>
            <span class="mx-2"> = </span>
            <div class="d-flex flex-column">
                <input type="number" class="form-control">
            </div>
        </div>
        `
    })


    var app = new Vue({
        el: "#floats-app",
        data: {
            difficulty: 1,
            amount: 3,
            questions : []
        },
        created: function () {
            //Fill in the array with three question fractions
            this.createQuestions();
        },
        methods : {
            createQuestions(){
                this.questions = createFloatQuestions(this.difficulty, this.amount);
            }
        }

    })



    
}