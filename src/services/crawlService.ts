// crawlService.ts
import { crawlUrls } from './crawler';
import { subscribeToLinksReady } from './eventSubscriber';
import { Config } from '../config';
import { log } from '../utils/logger';
import { Repository } from '../repository/repository';

class CrawlService {
  private repository: Repository;
  private depth: number;

  constructor(repository: Repository, depth: number) {
    this.repository = repository;
    this.depth = depth;
    console.log('Depth:', this.depth);
  }

  public async crawl(paths: string[], http: boolean): Promise<void> {
    try {
      const links = await crawlUrls(paths, this.depth, http);
      log('Links:', links);
      // Save the links to the repository
      this.saveLinks(paths, links); // Wrap links in an array to match the expected type
    } catch (error) {
      console.error('Error during crawling:', error);
      throw error; // Propagate the error
    }
  }

  private saveLinks(paths: string[], links: string[]): void {
    paths.forEach((path, index) => {
      this.repository.saveLinks(path, links);
    });
  }
}

export { CrawlService };
