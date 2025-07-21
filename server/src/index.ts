import express from 'express';
import { AppDataSource } from './data-source';
import { healthRouter } from './routes/health';
import { errorHandler } from './middleware/errorHandler';
import { routes } from './routes/routes';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import { NotFoundError } from './shared/errors';

const app = express();

const PORT = process.env.PORT || 3001;



app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// Health check routes
app.use('/health', healthRouter);
app.use('/api', routes);

app.use((req, res, next) => {
  const error = new NotFoundError('Not Found', 404);
  next(error);
});
// Error handler middleware (MUST be last)
app.use(errorHandler);

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
