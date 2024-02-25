import { scrapeLinks } from './utils/scraper';

export function crawlUrls(paths: string[], depth: number, http: boolean): Promise<string[]> {
  /*
    As an example, the following extracts links from given website URL or file path
    scrapeLinks('htmls/1.html', false).then(console.log);
    scrapeLinks('http://some-website.com/', true).then(console.log);
  */
  return Promise.resolve([]);
}
