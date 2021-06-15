const express=require('express');
const app=express();
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const cors=require('cors');
const routesURL=require('./routes/routes');

dotenv.config();
mongoose.connect(process.env.DATABASE_ACCESS, ()=>console.log('Database connected'));

app.use(express.json()); //with this line body-parser is activated

app.use(cors());

app.use('/app',routesURL);

app.listen(4000,()=>console.log('server is ready to accept request on port 4000'));