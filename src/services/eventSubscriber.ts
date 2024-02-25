import { eventEmitter } from "../events/eventsEmitter";

export function subscribeToLinksReady(callback: (links: string[]) => void): void {
    eventEmitter.on('linksReady', callback);
}