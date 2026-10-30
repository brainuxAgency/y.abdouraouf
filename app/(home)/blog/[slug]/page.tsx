import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { ArticleBody } from "@/components/blog/ArticleBody"
import { ArticleToc } from "@/components/blog/ArticleToc"
import { ArticleSidebar } from "@/components/blog/ArticleSidebar"
import { getAllSlugs, getPostBySlug, getToc, readingTime } from "@/lib/blog"

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return { title: `${post.title} — Blog`, description: post.description }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const date = new Date(post.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })
  const toc = getToc(post.content)
  const minutes = readingTime(post.content)

  return (
    <main className="min-h-screen bg-[#0a0c10] text-white">
      {/* En-tête de l'article */}
      <header className="mx-auto max-w-6xl px-5 pb-12 pt-32 sm:px-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-zinc-500 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-3.5 w-3.5" aria-hidden />
          Blog
        </Link>

        <div className="mt-10 max-w-3xl">
          {post.tags.length > 0 && (
            <div className="mb-6 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/blog?tag=${encodeURIComponent(tag)}`}
                  className="rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 font-mono text-[11px] text-orange-300 transition-colors hover:bg-orange-500/20"
                >
                  {tag}
                </Link>
              ))}
            </div>
          )}
          <h1 className="font-montserrat text-4xl font-semibold leading-[1.08] tracking-tight sm:text-6xl">
            {post.title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-zinc-400 sm:text-xl">{post.description}</p>

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs text-zinc-500">
            <span>{date}</span>
            <span className="h-1 w-1 rounded-full bg-zinc-700" aria-hidden />
            <span>{minutes} min de lecture</span>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-5 pb-24 sm:px-8">
        {/* Sommaire mobile : repliable au-dessus de l'article */}
        {toc.length > 0 && (
          <details className="mb-10 rounded-2xl border border-white/10 bg-[#0f1013] p-5 lg:hidden">
            <summary className="cursor-pointer font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-400">
              Sommaire
            </summary>
            <div className="mt-4">
              <ArticleToc items={toc} />
            </div>
          </details>
        )}

        <div className="grid gap-12 lg:grid-cols-12">
          {/* Colonne gauche : sommaire */}
          <aside className="hidden lg:col-span-2 lg:block">
            <div className="sticky top-28">
              <ArticleToc items={toc} />
            </div>
          </aside>

          {/* Centre : article, largeur de lecture confortable */}
          <article className="lg:col-span-7">
            <ArticleBody markdown={post.content} />

            {/* Bloc auteur */}
            <div className="mt-20 flex items-center gap-5 border-t border-white/10 pt-10">
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl border border-white/10">
                <Image src="/about/abdou.png" alt="Abdouraouf Youssouf" fill sizes="64px" className="object-cover object-top" />
              </div>
              <div>
                <p className="font-montserrat text-base font-semibold text-white">Abdouraouf Youssouf</p>
                <p className="mt-1 text-sm text-zinc-400">
                  Développeur full-stack. Je construis des produits web et je partage ce que j&apos;apprends.{" "}
                  <Link href="/about" className="text-orange-300 underline underline-offset-4 hover:text-orange-200">
                    En savoir plus
                  </Link>
                </p>
              </div>
            </div>
          </article>

          {/* Colonne droite : matières */}
          <ArticleSidebar currentSlug={post.slug} />
        </div>
      </div>
    </main>
  )
}
