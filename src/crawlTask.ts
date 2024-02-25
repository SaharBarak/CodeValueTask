import { crawlUrls } from './services/crawler';
import { subscribeToLinksReady } from './services/eventSubscriber';
import { Config } from './config';
import { log } from './utils/logger';

const depth = Config.getDepth();
console.log('Depth:', depth);

async function crawlTask() {
  try {
    const links = await crawlUrls(['htmls/1.html'], depth, false);
    log('Links ready:', links);
  } catch (error) {
    console.error('Error during crawling:', error);
  }
}

crawlTask();
