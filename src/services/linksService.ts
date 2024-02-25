import { Repository } from '../repository/repository';
import { LinksService } from '../services/linksService';

const repository = new Repository(); // Instantiate Repository
const linksService = new LinksService(repository); // Pass Repository to LinksService constructor


class LinksService {
  private repository: Repository;

  constructor(repository: Repository) {
    this.repository = repository;
  }

  public getAllLinks(): Map<string, string[]> {
    return this.repository.getAllLinks();
  }

  public getLinksByPath(path: string): string[] | undefined {
    return this.repository.getDirectLinks(path);
  }
}

export { LinksService };
