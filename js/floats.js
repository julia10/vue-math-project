window.onload = function () {


    Vue.component('float-question', {
        props : ['question'],

        template : `
        <div class="d-flex align-items-center justify-content-center">
            <p> <span>{{question.floats[0]}} </span> {{question.sign}} <span> {{question.floats[1]}} </span> = <span><input type="number" class="form-control"></span> </p>
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