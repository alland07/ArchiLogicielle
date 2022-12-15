import moduleAlias from "module-alias";
import path from "path";
// This needs to come first for resolving aliases
moduleAlias.addAlias("@", path.join(__dirname, "..", "..", "..", "..", "src"));

import { app } from "@/adapters/primary/express/app";

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
