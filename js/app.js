var app = new Vue({
    el: "#app",
    data: {
        number:0,
        clicks:0
    },
    methods:{
        subtract(){
            this.number > 0 && this.number--;
            this.clicks++;
        },

        add(){
            this.number++;
            this.clicks++;
        },
    },
    computed:{
        powerCount(){
            return this.number * this.number;
        }
    }
})