/** Maps a local route to its Version 2 equivalent. External URLs, mailto and bare hashes pass through. */
export function v2(href: string): string {
  if (!href.startsWith("/")) return href;
  if (href === "/") return "/v2";
  if (href.startsWith("/#")) return `/v2${href.slice(1)}`;
  if (href.startsWith("/v2")) return href;
  return `/v2${href}`;
}
