import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();
const AppDataSources = require('./config/data-source');
import registration_Routes from './routes/registration_Routes';
import AppConfig from './config';
const Base_url = '/api/v1';
import path from 'path';

const app = express();

// todo: =================================================================== MIDDLEWARE CONFIGURATIONS ===================================================================

// ejs template rendering
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(
  cors({
    origin: '*',
    // credentials: true
  })
);
app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));
app.use(express.static('./public/'));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('combined')); // use morgan to log requests to the console

// TODO: =================================================================== ROUTES MIDDLEWARE ===================================================================

app.use(`${Base_url}/asg`, registration_Routes);

app.use(`*`, (req, res) => {
  res.status(404).send('Route not found');
});

//todo: ===================================================================  CONNECT TO DATABASE ========================================================================

// Database initialization and server start
AppDataSources.initialize()
  .then(() => {
    console.log('Database connected successfully');

    // Start the server
    app.listen(AppConfig.port, () => {
      console.log(`Server started on port ${AppConfig.port}`);
    });
  })
  .catch((err: Error) => {
    console.error('Error during Data Source initialization:', err);
  });
