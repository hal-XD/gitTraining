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
        meddage: "You loaded this page on " + new Date().toLocaleString()
    }
})
