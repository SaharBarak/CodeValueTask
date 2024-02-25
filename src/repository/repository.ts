export class Repository {
    private static links: Record<string, string[]> = {};

    static saveLinks(path: string, links: string[]): void {
        this.links[path] = links;
    }

    static getLinks(path: string): string[] {
        return this.links[path] || [];
    }
}