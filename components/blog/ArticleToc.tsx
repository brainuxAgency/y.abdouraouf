import type { TocItem } from "@/lib/blog"

/** Sommaire compact : ancres vers les titres ## et ### de l'article. */
export function ArticleToc({ items }: { items: TocItem[] }) {
  if (items.length === 0) return null

  return (
    <nav aria-label="Sommaire de l'article">
      <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600">Sommaire</p>
      <ol className="space-y-0.5">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`block py-1 text-xs leading-snug text-zinc-500 transition-colors hover:text-white ${
                item.level === 2 ? "" : "pl-3 text-[11px] text-zinc-600"
              }`}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
