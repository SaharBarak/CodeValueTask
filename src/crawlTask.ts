import { crawlUrls } from './crawler';

const depth = 2;

async function crawl(paths: string[], http: boolean) {
  const links = await crawlUrls(paths, depth, http);
  console.log('links:', links);
}

crawl(['htmls/1.html'], false)
  .then(() => crawl(['htmls/2.html', 'htmls/3.html'], false));
