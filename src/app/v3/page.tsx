import { readFileSync } from "node:fs";
import { join } from "node:path";

// Home page markup exported from the LocalWP site (tanot-v3 theme), so /v3 matches it exactly.
// Tailwind scans the .html file for classes; edit it there (or re-export from LocalWP) to change the page.
const html = readFileSync(join(process.cwd(), "src/content/v3-local-home.html"), "utf8")
  .replaceAll("__THEME__/assets/images", "/images")
  .replaceAll("__HOME__", "/v3");

export default function V3Home() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
