import Link from "next/link"
import { getPublishedPosts } from "@/lib/blog"

/** Colonne de droite : la liste des autres articles, sans l'article ouvert. */
export function ArticleSidebar({ currentSlug }: { currentSlug?: string }) {
  const others = getPublishedPosts().filter((p) => p.slug !== currentSlug)
  if (others.length === 0) return null

  return (
    <aside className="lg:col-span-3">
      <div className="sticky top-28 rounded-3xl border border-white/10 bg-[#0f1013] p-6">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500">Articles</h2>
        <ul className="mt-4 divide-y divide-white/10">
          {others.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="group block py-4">
                <span className="block text-sm font-medium leading-snug text-zinc-200 transition-colors group-hover:text-orange-300">
                  {post.title}
                </span>
                <span className="mt-1.5 block font-mono text-[11px] text-zinc-600">
                  {new Date(post.date).toLocaleDateString("fr-FR", { day: "numeric", month: "short", year: "numeric" })}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}
