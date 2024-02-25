export class Config {
    static MAX_DEPTH: number;
    static getDepth(): number {
        const depthStr = process.env.CRAWLER_DEPTH;
        const depth = depthStr ? parseInt(depthStr, 10) : 2; // Default depth is 2 if not provided
        return isNaN(depth) ? 2 : Math.min(depth, 5); // Cap depth at maximum value of 5
    }
}