import express, {Application} from 'express';
import cors from 'cors';

const app: Application = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({extended: true}));

import router from './routes/router.js';

app.use("/api", router);


export default app;
