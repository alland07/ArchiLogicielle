import { CryptographyGateway } from "@/core/gateways/cryptographyGateway";

import crypto from "crypto";

export class NodeCryptographyGateway implements CryptographyGateway {
  createId(...args: string[]): string {
    const stringToHash = args.join();
    const hash = crypto.createHash("sha256");
    hash.update(stringToHash);
    return hash.digest("hex");
  }
}
