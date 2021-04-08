const dotenv = require("dotenv").config()
const express = require("express")
const app = express()
const cors = require("cors")

app.use(cors())
app.use(express.json())

const port = process.env.PORT || 9000

app.listen(port, ()=>{
    console.log("Listening...")
})

app.use("/api/",(_, res)=>{
    res.status(200).json({message:"I am the data"})
})

/* console.log("I am the run")
console.log(__dirname)
console.log(__filename)
console.log(process.env.USERNAME)
console.log(process.env.PORT) */