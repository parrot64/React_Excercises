const express = require('express');
const app = express()

function handleMain(request, response) {
    response.send(`

    <html>
        <head>
            <title>HELPME</title>
        </head>
        <body>
            <form action="/test-post" method="post">
                <label for="test_input">Test value</label>
                <input id="test_input" type="text" name="test_input" value="Test value" />
                <input type="submit" value="OK" />
            </form>
        </body>
    </html>`);
        
        `)
}

function handleTest(request, response) {
    response.send("this is test!")
}

function handlePost(request, response) {
    response.send("post has been recieved" + request.body)
}

app.get("/test", handleTest);
app.get("/", handleMain);
app.post("/test-post", handlePost)

app.listen(3000);