// import express from "express"
// import http from "http"
// import mongoose from "mongoose"
// import { mongoDBURL } from "./Config.js"
// import { Book } from "./Modles/bookModels.js"

// const app=express()
// app.use(express.json())
// const server=http.createServer(app)
// app.get("/",(reques,response)=>{
//     response.send("home page")
// })
// app.post('/books', async(request, response) =>{
//     try{
//         if(!request.body.title || 
//             !request.body.author|| 
//             !request.body.publishYear){
//             return response.status(400).send({messege:"send all required fields:title,author,publishYear;"})
//         }
//         const newBook={
//          title:request.body.title,
//          author:request.body.author,
//          publishYear:request.body.publishYear,
//         };
//         const book = await Book.create(newBook);
//         return response.status(201).send(book);
//     } catch(error){
//         console.log(errir.message);
//         response.status(500).send({message:error.message})
//     }
// })
// server.listen(5000,()=>{
//     console.log("server connected")
//     mongoose.connect(mongoDBURL).then(()=>console.log("database connected")).catch((err)=>console.log(err))
// })

// //  Your problem is solved now. right? yes but you change a lot of columnRuleWidth:  anyway what was the issue