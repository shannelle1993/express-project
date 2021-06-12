const express = require('express');
const bodyParser = require('body-parser');
const { tagmanager } = require('googleapis/build/src/apis/tagmanager');
const fetch = require("node-fetch");

const app = express();

const port = process.env.PORT || 4041;

fetch('https://api.hatchways.io/assessment/blog/posts', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
            tags: [""],
            sortBy: {
                id: "",
                reads: "",
                likes: "",
                popularity: ""
            },
            direction: "asc" || "desc"
        
if (tags == null) {
    return console.log("error: Tags parameter is required")
}

if (sortBy == undefined) {
    return console.log("error: sortBy parameter is invalid")

}).then(res => {
       return res.json()
     })
    .then(data => console.log(data))
    .catch(error => console.log('ERROR'))
    }); 


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', require('./routes/posts.js'));

app.listen(port, () => {
    console.log(`server is running on port: ${port}`);
});
