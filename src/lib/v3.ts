/** Maps a local route to its Version 3 equivalent. External URLs, mailto and bare hashes pass through. */
export function v3(href: string): string {
  if (!href.startsWith("/")) return href;
  if (href === "/") return "/v3";
  if (href.startsWith("/#")) return `/v3${href.slice(1)}`;
  if (href.startsWith("/v3")) return href;
  return `/v3${href}`;
}
