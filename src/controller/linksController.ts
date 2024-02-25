import { Request, Response } from 'express';
import { LinksService } from '../services/linksService';
import { Repository } from '../repository/repository';

const linksService = new LinksService(); // Instantiate LinksService

export function getAllLinksHandler(req: Request, res: Response): void {
  const links = linksService.getAllLinks();
  res.status(200).json(Array.from(links.entries()));
}

export function getLinksByPathHandler(req: Request, res: Response): void {
  const { path } = req.params;
  const links = linksService.getLinksByPath(path);
  if (!links) {
    res.status(404).json({ error: `Path '${path}' not found in the repository` });
    return;
  }
  res.status(200).json(links);
}
