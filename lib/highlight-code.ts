import { createHash } from "node:crypto";

import { codeToHtml } from "shiki";

// Highlighting is deterministic for a given source string + language, so we can
// safely memoize the generated HTML in-process and avoid repeating the Shiki work
// on every request during local dev or while the server stays warm.
const highlightCache = new Map<string, string>();

export async function highlightCode(code: string, language: string = "tsx") {
  // Use the content itself as the cache input so repeated component docs pages
  // can reuse the exact same highlighted payload without caring which route asked
  // for it.
  const cacheKey = createHash("sha256").update(`${language}:${code}`).digest("hex");

  const cached = highlightCache.get(cacheKey);

  if (cached) {
    return cached;
  }

  // Shiki runs fine on the server: it tokenizes the source code and returns an
  // HTML string with theme variables and token spans already applied. That lets
  // the page ship highlighted markup on first paint instead of waiting for a
  // client-side effect to colorize plain text after hydration.
  const html = await codeToHtml(code, {
    lang: language,
    themes: { dark: "github-dark", light: "github-light" },
    transformers: [
      {
        pre(node) {
          node.properties.class =
            "shiki no-scrollbar min-w-0 overflow-x-auto overflow-y-auto overscroll-x-contain overscroll-y-auto p-4 pr-16 text-sm leading-6";
        },
        code(node) {
          node.properties["data-line-numbers"] = "";
        },
        line(node) {
          node.properties["data-line"] = "";
        },
      },
    ],
  });

  // The caller renders this HTML payload directly. We keep the wrapper classes
  // here so every preview gets the same structure and scrolling behavior from one
  // place instead of rebuilding that shape at each call site.
  highlightCache.set(cacheKey, html);

  return html;
}
