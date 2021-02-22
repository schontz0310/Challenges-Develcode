import express from 'express';
import 'express-async-errors';
import cors from 'cors'

import path from 'path';
import errorHandler from './errors/handler'
import routes from './routes'

const corsOptions = {
  exposedHeaders: ['Authorization', 'X-Total-Count']
};

const app = express();
app.use(cors(corsOptions));
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHandler)
app.listen(3333, ()=> {
  console.log('server listen on port 3333');
}); 