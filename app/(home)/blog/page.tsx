import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { getPublishedPosts } from "@/lib/blog"

export const metadata: Metadata = {
  title: "Blog — Abdouraouf Youssouf",
  description: "Notes de terrain sur le développement web, les SaaS et la création de contenu.",
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })
}

type Props = { searchParams: Promise<{ tag?: string }> }

export default async function BlogPage({ searchParams }: Props) {
  const { tag } = await searchParams
  const all = getPublishedPosts()
  const posts = tag ? all.filter((p) => p.tags.includes(tag)) : all

  return (
    <main className="min-h-screen bg-[#0a0c10] text-white">
      <div className="mx-auto max-w-7xl px-5 pb-24 pt-32 sm:px-8">
        <span className="mb-4 block font-mono text-[11px] uppercase tracking-[0.2em] text-orange-400">Blog</span>
        <h1 className="font-montserrat text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
          Notes de terrain{" "}
          <span className="font-serif font-normal italic text-zinc-500">& retours d&apos;expérience.</span>
        </h1>

        {tag && (
          <p className="mt-6 font-mono text-xs text-zinc-500">
            Matière : <span className="text-orange-300">{tag}</span> ·{" "}
            <Link href="/blog" className="underline underline-offset-4 hover:text-white">
              tout voir
            </Link>
          </p>
        )}

        {posts.length === 0 ? (
          <p className="mt-16 font-mono text-sm text-zinc-500">Aucun article publié pour le moment.</p>
        ) : (
          <ul className="mt-16 divide-y divide-white/10 border-y border-white/10">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="group flex items-start justify-between gap-6 py-8">
                  <div className="min-w-0">
                    <p className="font-mono text-[11px] uppercase tracking-wider text-zinc-500">
                      {formatDate(post.date)}
                      {post.tags.length > 0 && <span className="text-zinc-600"> · {post.tags.join(" · ")}</span>}
                    </p>
                    <h2 className="mt-2 font-montserrat text-xl font-semibold tracking-tight text-white transition-colors group-hover:text-orange-300 sm:text-2xl">
                      {post.title}
                    </h2>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-400">{post.description}</p>
                  </div>
                  <ArrowUpRight
                    className="mt-1 h-5 w-5 shrink-0 text-zinc-600 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-orange-400"
                    aria-hidden
                  />
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  )
}
