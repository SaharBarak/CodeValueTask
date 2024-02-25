import express, { Request, Response } from 'express';
import { crawlHandler } from '../controller/crawlsController';

const crawlRoutes = express.Router();

crawlRoutes.post('/', crawlHandler);

export default crawlRoutes;
