import Link from "next/link"
import ReactMarkdown from "react-markdown"
import { CTAButton } from "@/components/common/CTAButton"
import { CalButton } from "@/components/common/CalButton"
import { slugify } from "@/lib/blog"
import { CodeBlock } from "@/components/blog/CodeBlock"

function textOf(node: React.ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node)
  if (Array.isArray(node)) return node.map(textOf).join("")
  if (node && typeof node === "object" && "props" in node) return textOf((node as { props: { children?: React.ReactNode } }).props.children)
  return ""
}

/**
 * Syntaxe de bouton dans les articles :
 *   :cta[Texte du bouton]{href="/#contact" variant="primary" size="md"}
 * Les variantes acceptées sont celles de CTAButton (primary, outline-primary, outline, ghost, secondary).
 *
 * Pour ouvrir le calendrier Cal.com dans une fenêtre :
 *   :cta[Choisir un créneau]{action="cal"}
 */
const CTA_PATTERN = /:cta\[([^\]]+)\]\{([^}]*)\}/g

function parseAttributes(raw: string): Record<string, string> {
  const attrs: Record<string, string> = {}
  for (const match of raw.matchAll(/(\w+)="([^"]*)"/g)) {
    attrs[match[1]] = match[2]
  }
  return attrs
}

function renderCta(label: string, rawAttrs: string, key: string) {
  const attrs = parseAttributes(rawAttrs)

  if (attrs.action === "cal") {
    return (
      <div key={key} className="my-8 flex justify-start">
        <CalButton className="group inline-flex items-center gap-2.5 rounded-full bg-orange-800 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-950/40 transition-colors duration-200 hover:bg-orange-700 cursor-pointer">
          {label}
        </CalButton>
      </div>
    )
  }
  const href = attrs.href ?? "/#contact"
  const isExternal = /^https?:\/\//.test(href)
  const variant = (attrs.variant as "primary" | "outline-primary" | "outline" | "ghost" | "secondary") ?? "primary"
  const size = (attrs.size as "sm" | "md" | "lg") ?? "md"

  return (
    <div key={key} className="my-8 flex justify-start">
      <CTAButton
        href={href}
        variant={variant}
        size={size}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {label}
      </CTAButton>
    </div>
  )
}

/** Découpe le Markdown autour des directives :cta et rend chaque morceau. */
export function ArticleBody({ markdown }: { markdown: string }) {
  const parts: React.ReactNode[] = []
  let last = 0
  let index = 0

  for (const match of markdown.matchAll(CTA_PATTERN)) {
    const start = match.index ?? 0
    const text = markdown.slice(last, start)
    if (text.trim()) parts.push(<Markdown key={`md-${index}`} text={text} />)

    parts.push(renderCta(match[1], match[2], `cta-${index}`))
    last = start + match[0].length
    index++
  }

  const rest = markdown.slice(last)
  if (rest.trim()) parts.push(<Markdown key={`md-${index}`} text={rest} />)

  return <div>{parts}</div>
}

function Markdown({ text }: { text: string }) {
  return (
    <ReactMarkdown
      components={{
        h2: ({ children }) => (
          <h2 id={slugify(textOf(children))} className="scroll-mt-28 mt-16 font-montserrat text-2xl font-semibold tracking-tight text-white sm:text-3xl">{children}</h2>
        ),
        h3: ({ children }) => (
          <h3 id={slugify(textOf(children))} className="scroll-mt-28 mt-10 font-montserrat text-xl font-semibold tracking-tight text-white">{children}</h3>
        ),
        pre: ({ children }) => {
          const child = (Array.isArray(children) ? children[0] : children) as { props?: { className?: string; children?: React.ReactNode } } | undefined
          const language = /language-(\w+)/.exec(child?.props?.className ?? "")?.[1]
          const code = textOf(child?.props?.children).replace(/\n$/, "")
          return <CodeBlock code={code} language={language} />
        },
        p: ({ children }) => <p className="mt-5 text-base leading-relaxed text-zinc-300">{children}</p>,
        ul: ({ children }) => <ul className="mt-5 list-disc space-y-2 pl-6 text-zinc-300">{children}</ul>,
        ol: ({ children }) => <ol className="mt-5 list-decimal space-y-2 pl-6 text-zinc-300">{children}</ol>,
        blockquote: ({ children }) => (
          <blockquote className="mt-6 border-l-2 border-orange-500/60 pl-5 font-serif text-xl italic text-zinc-400">
            {children}
          </blockquote>
        ),
        code: ({ children }) => (
          <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-[0.9em] text-orange-200">{children}</code>
        ),
        a: ({ href, children }) => {
          const url = href ?? "#"
          const className = "text-white underline decoration-white/30 underline-offset-4 hover:decoration-orange-400"
          return /^https?:\/\//.test(url) ? (
            <a href={url} target="_blank" rel="noopener noreferrer" className={className}>
              {children}
            </a>
          ) : (
            <Link href={url} className={className}>
              {children}
            </Link>
          )
        },
        img: ({ src, alt }) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={src} alt={alt ?? ""} className="mt-8 w-full rounded-2xl border border-white/10" />
        ),
      }}
    >
      {text}
    </ReactMarkdown>
  )
}
