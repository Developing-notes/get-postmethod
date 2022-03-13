const first = require('express')
const bodyParser = require('body-parser')
const second = first()
second.use(bodyParser.urlencoded({extended: true}));

second.get('/', function (request, response) {
    response.sendFile(__dirname + "/index.html")
})
second.post('/', function (request, response) {
    var firstel = Number(request.body.num1)
    var secondel = Number(request.body.num2)
    var result = firstel +secondel
    response.send('Addition is:' + result)
})

second.listen(3000, function () {
    console.log("success")
})
