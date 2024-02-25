// crawlsController.ts
import { Request, Response } from 'express';
import { CrawlService } from '../services/crawlService';

const crawlService = new CrawlService(); // Instantiate CrawlService

export function crawlHandler(req: Request, res: Response): void {
  const { paths, http } = req.body; // Extract paths and http from request body

  crawlService.crawl(paths, http)
    .then(() => {
      res.status(202).json({ message: 'Crawling initiated successfully' });
    })
    .catch((error) => {
      res.status(500).json({ error: 'Internal server error' });
    });
}
