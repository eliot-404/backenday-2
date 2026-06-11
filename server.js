const express = require("express")

const app = express()
 // server instance create karna 

 app.get("/", (req, res) => {

    res.send("Hello world") // jab bhi /about page pe jayenge to This is about page show hoga 
})

 
app.get("/about", (req, res) => {

    res.send("This is about page") // jab bhi /about page pe jayenge to This is about page show hoga 
})



app.get("/home" , (req, res) => {
    res.send("This is home page")
})
app.listen( process.env.PORT||3000) //server stsrt ho rha h 