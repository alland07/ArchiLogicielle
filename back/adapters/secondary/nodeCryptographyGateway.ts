import { createHash } from "crypto";

import { CryptographyGateway } from "../../core/gateways/cryptographyGateway";

export class NodeCryptographyGateway implements CryptographyGateway {
  createId(...args: string[]): string {
    return createHash("sha256").update(args.join()).digest("hex");
  }
}
