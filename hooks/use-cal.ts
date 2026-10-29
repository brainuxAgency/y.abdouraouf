"use client"

import { useEffect, useRef } from "react"

export const CAL_LINK = "abdouraouf-discutons-projet/30min"
export const CAL_NAMESPACE = "30min"

/**
 * Hook réutilisable pour initialiser le script Cal.com (element-click)
 * Permet d'ouvrir le modal de réservation au clic sur n'importe quel élément
 * ayant les attributs data-cal-link, data-cal-namespace et data-cal-config.
 */
export function useCal() {
  const initialized = useRef(false)

  useEffect(() => {
    if (initialized.current) return
    initialized.current = true

    if (typeof window === "undefined") return

    ;(function (C: any, A: string, L: string) {
      const p = function (a: any, ar: any) {
        a.q.push(ar)
      }
      const d = C.document
      C.Cal =
        C.Cal ||
        function () {
          const cal = C.Cal
          const ar = arguments
          if (!cal.loaded) {
            cal.ns = {}
            cal.q = cal.q || []
            const s = d.createElement("script")
            s.src = A
            d.head.appendChild(s)
            cal.loaded = true
          }
          if (ar[0] === L) {
            const api: any = function () {
              p(api, arguments)
            }
            const namespace = ar[1]
            api.q = api.q || []
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api
              p(cal.ns[namespace], ar)
              p(cal, ["initNamespace", namespace])
            } else p(cal, ar)
            return
          }
          p(cal, ar)
        }
    })(window, "https://app.cal.com/embed/embed.js", "init")

    const Cal = (window as any).Cal
    if (!Cal) return

    Cal("init", CAL_NAMESPACE, { origin: "https://app.cal.com" })
    Cal.config = Cal.config || {}
    Cal.config.forwardQueryParams = true

    Cal.ns[CAL_NAMESPACE]("ui", {
      theme: "dark",
      hideEventTypeDetails: false,
      layout: "month_view",
      cssVarsPerTheme: {
        dark: { "cal-brand": "#ea580c" },
        light: { "cal-brand": "#ea580c" },
      },
    })
  }, [])
}
