var app = new Vue ({
    el: '#app',
    data: {
        url: "",
        cleanUrl: ""
    },
    methods: {
        cleanerUrl: function () {
            this.cleanUrl =this.url.replace(/^https?:\/\//, '').replace(/\/$/,'')
        }
    }
})