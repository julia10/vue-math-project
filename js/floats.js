window.onload = function () {


    Vue.component('float-question', {

        template : `
        <div class="d-flex align-items-center justify-content-center">
            <p> <span>number </span> + <span>number </span> = <span>answer </span> </p>
        </div>
        `
    })


    var app = new Vue({
        el: "#floats-app",
        data: {
            questions : []
        }

    })



    
}