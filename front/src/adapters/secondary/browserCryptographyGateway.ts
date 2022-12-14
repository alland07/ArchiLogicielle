import { CryptographyGateway } from "../../core/gateways/cryptographyGateway";

export class BrowserCryptographyGateway implements CryptographyGateway {
  createId(...args: string[]): string {
    const stringToHash = args.join();

    // from https://stackoverflow.com/a/52171480
    let h1 = 0xdeadbeef,
      h2 = 0x41c6ce57;
    for (let i = 0, ch; i < stringToHash.length; i++) {
      ch = stringToHash.charCodeAt(i);
      h1 = Math.imul(h1 ^ ch, 2654435761);
      h2 = Math.imul(h2 ^ ch, 1597334677);
    }

    h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
    h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);

    return (4294967296 * (2097151 & h2) + (h1 >>> 0)).toString(16);
  }
}
