import express from 'express';
import { getAllLinksHandler, getLinksByPathHandler } from '../controller/linksController';

const linksRouter = express.Router();

linksRouter.get('/', getAllLinksHandler);
linksRouter.get('/:path', getLinksByPathHandler);

export default linksRouter;
