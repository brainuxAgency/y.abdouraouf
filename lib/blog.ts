import fs from "fs"
import path from "path"
import matter from "gray-matter"

export const BLOG_DIR = path.join(process.cwd(), "content", "blog")

export type PostMeta = {
  slug: string
  title: string
  description: string
  date: string
  cover?: string
  tags: string[]
  draft: boolean
}

export type Post = PostMeta & { content: string }

function readPost(file: string): Post {
  const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf8")
  const { data, content } = matter(raw)

  if (!data.title || !data.description || !data.date) {
    throw new Error(`Frontmatter incomplet dans ${file} (title, description, date requis)`)
  }

  return {
    slug: file.replace(/\.md$/, ""),
    title: String(data.title),
    description: String(data.description),
    date: new Date(data.date).toISOString(),
    cover: data.cover ? String(data.cover) : undefined,
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    draft: Boolean(data.draft),
    content,
  }
}

/** Articles publiés uniquement (draft: false), du plus récent au plus ancien. */
export function getPublishedPosts(): PostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return []

  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md"))
    .map(readPost)
    .filter((p) => !p.draft)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .map(({ content: _content, ...meta }) => meta)
}

export function getPostBySlug(slug: string): Post | null {
  const file = `${slug}.md`
  if (!fs.existsSync(path.join(BLOG_DIR, file))) return null

  const post = readPost(file)
  return post.draft ? null : post
}

export function getAllSlugs(): string[] {
  return getPublishedPosts().map((p) => p.slug)
}

/** Identifiant d'ancre stable à partir d'un titre (sans accents, en minuscules). */
export function slugify(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
}

export type TocItem = { id: string; text: string; level: 2 | 3 }

/** Titres ## et ### de l'article, pour la table des matières. */
export function getToc(markdown: string): TocItem[] {
  const items: TocItem[] = []
  for (const line of markdown.split("\n")) {
    const match = /^(##|###)\s+(.+?)\s*$/.exec(line)
    if (!match) continue
    const text = match[2].replace(/[*_`]/g, "")
    items.push({ id: slugify(text), text, level: match[1].length === 2 ? 2 : 3 })
  }
  return items
}

/** Temps de lecture estimé, en minutes (200 mots par minute). */
export function readingTime(markdown: string): number {
  const words = markdown.trim().split(/\s+/).length
  return Math.max(1, Math.round(words / 200))
}
