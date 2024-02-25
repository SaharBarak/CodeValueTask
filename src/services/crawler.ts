import { scrapeLinks } from '../utils/scraper';
import { Repository } from '../repository/repository';
import { emitLinksReadyEvent } from './eventService';

export async function crawlUrls(paths: string[], depth: number, http: boolean): Promise<string[]> {
    const visited: Set<string> = new Set(); // To keep track of visited URLs
    const allLinks: string[] = []; // To accumulate all links found

  async function crawlPath(path: string, currentDepth: number) {
      if (currentDepth > depth || visited.has(path)) {
          return; // Stop crawling if depth exceeded or path already visited
      }

      visited.add(path);
      const links = await scrapeLinks(path, http);
      Repository.saveLinks(path, links); // Save links to repository
      allLinks.push(...links);

      if (currentDepth < depth) {
          const promises = links.map(link => crawlPath(link, currentDepth + 1));
          await Promise.all(promises);
      }
      
      if (currentDepth === 1) {
        emitLinksReadyEvent(allLinks); // Emit event when links are ready
    }
  }

  await Promise.all(paths.map(path => crawlPath(path, 1)));
  return allLinks;
}