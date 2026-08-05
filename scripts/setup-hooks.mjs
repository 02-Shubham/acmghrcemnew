// Points git at the version-controlled .githooks directory so the repo's
// hooks (e.g. the pre-push guard on "main") are active for everyone.
// Runs automatically via the "prepare" npm script on `npm install`.
import { execSync } from "node:child_process";

try {
  execSync("git config core.hooksPath .githooks", { stdio: "ignore" });
} catch {
  // Not a git checkout (e.g. installed from a tarball) — nothing to wire up.
}
