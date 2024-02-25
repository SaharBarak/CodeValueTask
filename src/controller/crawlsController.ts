import { Request, Response } from 'express';
import { crawl } from '../services/crawlService';
import { Config } from '../config';

export function crawlHandler(req: Request, res: Response): void {
  const { paths, depth, http } = req.body;
  if (typeof depth !== 'number' || depth < 0 || depth > Config.MAX_DEPTH) {
    res.status(400).json({ error: 'Invalid depth value' });
    return;
  }

  crawl(paths, depth, http)
    .then(() => {
      res.status(202).json({ message: 'Crawling initiated successfully' });
    })
    .catch((error) => {
      res.status(500).json({ error: 'Internal server error' });
    });
}
