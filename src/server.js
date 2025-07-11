const express = require('express');
const mongoose = require('mongoose');
const cors=require('cors');
const app=express();
const PORT=5500;
app.use(cors());
app.use(express.json());
app.listen(PORT,() => {
    console.log("Server is Listning ",PORT);
}
);
mongoose.connect('mongodb+srv://siva3736nathan:HMnyo03OmejSfopT@mycluster.evfnegf.mongodb.net/')
    .then(()=>console.log('MongoDB Connected'))
    .catch(error=>{
        console.log('mission failed');
    })
const userRoute = require('./userdb'); 
app.use('/api/user', userRoute);

