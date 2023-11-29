import express from 'express';
import stealRouter from './routes/steal.router.js';
import config from './config/config.js';
import cors from 'cors';
import __dirname from '../src/utils.js';
import { updateRandomSteals } from './controllers/steal.controller.js';


const app = express();

app.use(cors({
  origin: config.react.FRONTBASEURL,
  credentials: true
}));

const PORT = config.app.PORT || 8080;
const server = app.listen(PORT, () => console.log(`Listening on ${PORT}`));

setInterval(() => {
  updateRandomSteals();
  console.log('Base de datos actualizada automáticamente.');
}, 10 * 1000);

//app config
app.use(express.json());
app.use(express.static(`${__dirname}/public`));
app.use(express.urlencoded({ extended: true }));

//Routes
app.use('/api/steal', stealRouter);