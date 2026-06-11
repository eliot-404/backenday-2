const express = require("express")

const app = express()
 // server instance create karna 
 
app.get("/about", (req, res) => {

    res.send("This is about page") // jab bhi /about page pe jayenge to This is about page show hoga 
})
app.listen(3000) //server stsrt ho rha h 