import express from 'express';
const app = express()
app.use(express.static('public'))
import bodyParser from 'body-parser';
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/getpost', function (req, res) {
    var user = req.body.username
    var pass = req.body.password

    if (user == 'guest' & pass == '0000')
        res.end('Welcome bro')
    else
        res.end('Sorry, you are not allowed to access this page')
})
app.listen(880)
