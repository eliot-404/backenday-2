const express = require("express")

const app = express()

app.get("/", (req, res) => {
    res.send("Home page")
})

app.get("/home", (req, res) => {
    res.send("This is home page")
})


app.get("/about", (req, res) => {
    res.send("This is about page")
})

app.listen(process.env.PORT || 3000)