const express=require("express")


const app=express()

app.get("/about-us",(request,response)=>{

    response.send("About us")


})




app.listen(8000,()=>{
console.log("server created")
})

// webserver
// API 
// to reduce boiler plate code of node.js


