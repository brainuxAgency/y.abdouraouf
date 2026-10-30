# RÈGLE FRONTEND & RESPONSIVITÉ — Abdouraouf Youssouf Portfolio

## 1. Règle absolue de padding responsive : `p-2` (mobile) / `p-5` (desktop)

Pour éviter tout débordement d'écran sur les téléphones et les petits écrans (mobile overflow / 320px - 768px) tout en conservant une aération soignée et statutaire sur grand écran, **TOUS LES COMPOSANTS** doivent strictement respecter le calibrage de padding suivant :

### Convention obligatoire :
- **Conteneurs internes, fiches, bento, cartes et modales** :
  `p-2 md:p-5`
- **Gouttières horizontales de section / conteneurs principaux (`max-w-*`)** :
  `px-2 md:px-5`
- **Paddings verticaux de grilles ou panneaux internes** :
  `py-2 md:py-5`

> [!IMPORTANT]
> **Interdiction formelle** de mettre des paddings mobiles statiques larges tels que `p-6`, `p-8`, `px-6`, `px-8` directement sur des éléments imbriqués ou sans adaptation mobile `p-2`. Cela provoque des débordements horizontaux immédiats sur mobile.

---

## 2. Exemple d'application dans les composants

```tsx
// ✅ Correct : Padding responsive strict
<div className="rounded-3xl border border-white/10 bg-[#0f1013] p-2 md:p-5">
  <div className="grid gap-4 p-2 md:p-5">
    ...
  </div>
</div>

// ❌ Incorrect : Crée un débordement d'écran sur mobile
<div className="rounded-3xl border border-white/10 bg-[#0f1013] p-6 sm:p-8">
  ...
</div>
```

---

## 3. Typographie & Titres fluides (Clamp)
- Les titres de grande taille doivent utiliser un `clamp` modéré pour ne jamais pousser les éléments hors champ :
  - **Hero Title (`h1`)** : `text-[clamp(2rem,4vw,3.6rem)]`
  - **Titres de section (`h2`)** : `text-3xl sm:text-5xl` ou `text-[clamp(1.75rem,3.2vw,3rem)]`
- Toujours vérifier que les boutons d'action (CTA) restent visibles dans l'écran sans obliger l'utilisateur à faire défiler la page.

---

## 4. Couleur Primary & Tokens
- Toute teinte d'accentuation ou bouton d'action principal doit utiliser les tokens CSS :
  - `bg-primary`, `text-primary`, `border-primary`
  - `.btn-cta-gold` pour les boutons CTA
  - Aucune couleur orange foncée codée en dur (`orange-800`, `orange-700`, `#ff5400`, etc.).

