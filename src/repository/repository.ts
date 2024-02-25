// repository.ts
export class Repository {
  private static instance: Repository;
  private links: Record<string, string[]> = {};

  private constructor() {}

  public static getInstance(): Repository {
    if (!Repository.instance) {
      Repository.instance = new Repository();
    }
    return Repository.instance;
  }

  public saveLinks(path: string, links: string[]): void {
    this.links[path] = links;
  }

  public getLinks(path: string): string[] {
    return this.links[path] || [];
  }

  public getAllLinks(): Map<string, string[]> {
    return new Map(Object.entries(this.links));
  }
}
