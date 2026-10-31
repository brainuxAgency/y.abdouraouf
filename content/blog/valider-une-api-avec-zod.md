---
title: "Valider une route API Next.js avec Zod"
description: "Comment refuser les données invalides dès l'entrée de l'API, et renvoyer des erreurs claires au client."
date: 2026-10-22
tags: ["Next.js", "TypeScript"]
draft: false
---

Une route API reçoit des données que tu ne contrôles pas. Le plus simple est de les valider **avant** toute logique métier.

## Le schéma

On décrit la forme attendue une seule fois, avec Zod :

```ts
import { z } from "zod"

export const contactSchema = z.object({
  name: z.string().min(2, "Le nom est trop court"),
  email: z.string().email("Adresse e-mail invalide"),
  message: z.string().min(10).max(2000),
})

export type ContactInput = z.infer<typeof contactSchema>
```

## La route

Dans `app/api/contact/route.ts`, on parse le corps de la requête. Si ça échoue, on renvoie un `400` avec les messages d'erreur.

```ts
import { NextResponse } from "next/server"
import { contactSchema } from "@/lib/schemas"

export async function POST(request: Request) {
  const body = await request.json().catch(() => null)
  const result = contactSchema.safeParse(body)

  if (!result.success) {
    return NextResponse.json(
      { errors: result.error.flatten().fieldErrors },
      { status: 400 },
    )
  }

  // result.data est typé et valide ici
  return NextResponse.json({ ok: true })
}
```

![Le planning de publication dans Ripostera, où chaque envoi est validé avant publication](/about/ripostera-planning.png)

## Pourquoi c'est utile

- Les erreurs arrivent au même endroit, avec un format stable.
- Le type `ContactInput` est dérivé du schéma : il ne peut pas diverger.
- Le même schéma peut servir côté formulaire, pour afficher les erreurs avant l'envoi.

:cta[Voir comment je structure mes API]{href="/#services" variant="outline-primary"}
