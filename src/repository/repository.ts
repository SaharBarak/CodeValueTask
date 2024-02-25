// repository.ts
export class Repository {
    private links: Record<string, string[]> = {};
  
    public saveLinks(path: string, links: string[]): void {
      this.links[path] = links;
    }
  
    public getLinks(path: string): string[] {
      return this.links[path] || [];
    }
  
    public getAllLinks(): Record<string, string[]> {
      return this.links;
    }
  }
  