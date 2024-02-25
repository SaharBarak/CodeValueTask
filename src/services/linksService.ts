// linksService.ts
import { Repository } from '../repository/repository';

class LinksService {
  private repository: Repository;

  constructor(repository: Repository) {
    this.repository = repository;
  }

  public getAllLinks(): Map<string, string[]> {
    return this.repository.getAllLinks(); // Implement logic to get all links from the repository
  }

  public getLinksByPath(path: string): string[] | undefined {
    return this.repository.getLinks(path); // Implement logic to get links by path from the repository
  }
}

export { LinksService };
