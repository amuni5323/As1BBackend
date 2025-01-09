// // import axios from 'axios';

// // axios.post('http://localhost:5555/books', {
// //   title: 'Test Book',
// //   author: 'Test Author',
// //   publishYear: 2023,
// // })
// // .then(response => console.log('Success:', response.data))
// // .catch(error => console.error('Error:', error));

// import express from "express";
// import http from "http";
// import mongoose from "mongoose";
// import { mongoDBURL } from "./Config.js";
// import { Book } from './Modles/bookModels.js';
// // import bookModels from "./Modles/bookModels.js";
// const App = express();
// // const PORT_TO_USE = PORT || 3000;

// const server=http.createServer(App)

//   //  The issue was  but I've noticed when I'm starting to type my self . Is it clear now? ya . Good Night thank you good night
// App.use(express.json()); // The Issue might be this cuz it should be called -- App.use(expres.json())- to parse incoming requests to json
// App.get('/', (request, response) => {
//     console.log(request);
//  response.status(234).send('Welcome to MERN Stack Tutorial')
// });
// App.post('/books', async(request, response) =>{
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
// mongoose
// .connect(mongoDBURL)
// .then(() => {
//     console.log({ useNewUrlParser: true, useUnifiedTopology: true });

//     App.listen(PORT, () => {
//         console.log("app listening in port 5555");
//     });
// })
// .catch((error) => {
//     console.log(error);
// });
