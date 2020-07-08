window.onload = function () {


    Vue.component('float-question', {
        props : ['question', 'index'],
        data : function() {
            return {
                userInput : ''
            }
        },

        methods : {
            sendData() {
                this.$emit("user-input",  this.userInput, this.index );
            }
        },

        template : `
        <div class="d-flex align-items-center justify-content-center m-2">

            <div v-for="(float, index) of question.floats" class="d-flex align-items-center">
                    {{float}}
                    <span v-if="index !== question.floats.length - 1" class="mx-2">{{ question.sign }}</span>
            </div>
            <span class="mx-2"> = </span>
            <div class="d-flex flex-column">
                <input @keyup="sendData" v-model='userInput' type="number" class="form-control">
            </div>
            <div>
                <span>
                    <i class="fa fa-question fa-fw fa-2x" ></i>
                </span>
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
            },

            assignUserInput(userInput, index) {
                this.questions[index].userAnswer = parseFloat(userInput);
            }

            
        }

    })



    
}