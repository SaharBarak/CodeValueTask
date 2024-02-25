// crawlService.ts
import { crawlUrls } from './crawler';
import { log } from '../utils/logger';
import { Repository } from '../repository/repository';
import { Config } from '../config';

class CrawlService {
  private repository: Repository;
  private depth: number;

  constructor() {
    this.repository = Repository.getInstance(); // Get singleton instance of Repository
    this.depth = Config.getDepth(); // Get depth from configuration
    console.log('Depth:', this.depth);
  }

  public async crawl(paths: string[], http: boolean): Promise<void> {
    try {
      const links = await crawlUrls(paths, this.depth, http);
      log('Links:', links);
      this.saveLinks(paths, links);
    } catch (error) {
      console.error('Error during crawling:', error);
      throw error;
    }
  }

  private saveLinks(paths: string[], links: string[]): void {
    paths.forEach((path, index) => {
      this.repository.saveLinks(path, links);
    });
  }
}

export { CrawlService };
