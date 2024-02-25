import express from 'express';
import crawlsRoutes from './routes/crawlRoutes';
import linksRoutes from './routes/linkRoutes';
import { log } from './utils/logger';

const app = express();
const port = 3000;

app.use(express.json());

// Middleware for logging
app.use((req, res, next) => {
  log(`Received ${req.method} request at ${req.path}`);
  next();
});

// Mount crawls routes
app.use('/api/crawl', crawlsRoutes);

// Mount links routes
app.use('/api/links', linksRoutes);

app.listen(port, () => {
  log(`Server is running on port ${port}`);
});
