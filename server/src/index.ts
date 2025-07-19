import express from 'express';
import { AppDataSource } from './data-source';
import { healthRouter } from './routes/health';

const app = express();

const PORT = process.env.PORT || 3001;

app.get('/', (_req, res) => {
  res.send('Server is running!');
});

// Health check routes
app.use('/health', healthRouter);

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });
