var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
});

app.message = 'I have changed the data!';

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: "You loaded this page on " + new Date().toLocaleString()
    }
});

var app4 = new Vue({
    el: '#app-4',
    data: {
        todos:[
            {text:"learn javascript"},
            {text:"Learn Vue"},
            {text:"Build something awesome"}
        ]
    }
});

var app5 = new Vue({
    el: "#app-5",
    data:{
        message:"hello Vue.js!!"
    },
    methods: {
        rMessage: function(){
            this.message = this.message.split('').reverse().join('')
        }
    }
});

var app6 = new Vue({
    el: "#app-6",
    data:{
        message: "app-6 message"
    }
});

Vue.component('todo-item',{
    props: ['todo'],
    template: '<li>{{todo.text}}</li>'
})

var app7 = new Vue({
    el: "#app-7",
    data: {
        groceryList : [
        {id:0,text:"vegetables"},
        {id:2,text:"Cheese"},
        {id:1,text:"whatever else humans are suppposed to eat"}
       ]
    }
}); 
