import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();
import configuration from './configs/index.js';
import mongoose from 'mongoose';
import cors from 'cors';
import contactRoute from './routes/contact.routes.js';
import notFound from './middlewares/notfound.js';

app.use(express.json());
app.use(cors());
app.use(contactRoute);
app.use(notFound)
mongoose.connect(configuration.mongoURI)
.then(() => {
    app.listen(configuration.port, ()=> {
        console.log("listening on port "+configuration.port);
    });
})
.catch(err => {
    console.log(err);
});