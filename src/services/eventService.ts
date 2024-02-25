import { eventEmitter } from "../events/eventsEmitter";

export function emitLinksReadyEvent(links: string[]): void {
    eventEmitter.emit('linksReady', links);
}