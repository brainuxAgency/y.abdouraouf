# Y.Abdouraouf — Portfolio

Site personnel de **Abdouraouf Youssouf**, développeur web : présentation, projets, services, ressources téléchargeables, prise de contact et boutique de ressources payantes.

## Fonctionnalités

- **Pages publiques** : accueil, à propos, réalisations (`/work`) et ressources (`/ressources`).
- **Formulaire de contact** : envoi du message par l'API `app/api/contact/route.ts`, avec notification par e-mail (Nodemailer) si la configuration SMTP est présente.
- **Réservation** : bouton d'ouverture d'un créneau Cal.com (hook `hooks/use-cal.ts`).
- **Authentification** : inscription, connexion par e-mail/mot de passe ou Google, réinitialisation du mot de passe par code OTP (Better Auth, avec plugins `admin`, `emailOTP` et `openAPI`).
- **Paiement** : achat de ressources via PayPal (`components/paypal-btn.tsx`, `actions/purshase.action.ts`).
- **E-mails transactionnels** : modèles React Email dans `emails/` et `components/email-templete/`.
- **Pages légales** : conditions générales, politique de confidentialité, sécurité des paiements (`app/legal/`).

## Stack technique

| Domaine        | Technologies                                                   |
| -------------- | -------------------------------------------------------------- |
| Framework      | Next.js 16 (App Router), React 19, TypeScript                  |
| Style & UI     | Tailwind CSS, Radix UI, shadcn/ui (`components.json`), Framer Motion |
| Données        | PostgreSQL, Prisma ORM                                         |
| Authentification | Better Auth                                                  |
| Formulaires    | React Hook Form, Zod, zsa (actions serveur typées)             |
| E-mail         | Nodemailer, React Email, Resend                                |
| Paiement       | PayPal (`@paypal/react-paypal-js`)                             |

## Structure du projet

```
app/                  Routes Next.js (App Router) et routes API
  (home)/             Pages publiques (accueil, about, work, ressources)
  api/                Routes API (auth Better Auth, contact)
  legal/              Pages légales
actions/              Actions serveur (utilisateurs, e-mails, achats)
components/           Composants React (home, auth, ui, email-templete, ...)
emails/               Modèles d'e-mails (React Email)
hooks/                Hooks réutilisables (Cal.com, mobile, toasts, session)
lib/                  Utilitaires : client Prisma (db.ts), e-mail, zsa
prisma/               Schéma et migrations de la base de données
src/                  Constantes (services, réseaux sociaux), schémas, types
public/               Fichiers statiques
auth.ts               Configuration de Better Auth
auth-client.ts        Client d'authentification côté navigateur
```

## Prérequis

- **Node.js** 20 ou plus récent
- **npm** ou **pnpm**
- Une base **PostgreSQL** accessible

## Installation

```bash
# 1. Cloner le dépôt
git clone <url-du-depot>
cd y.abdouraouf

# 2. Installer les dépendances
npm install        # ou : pnpm install

# 3. Créer le fichier .env à la racine (voir section suivante)

# 4. Appliquer les migrations Prisma
npx prisma migrate dev

# 5. Lancer le serveur de développement
npm run dev
```

Le site est alors disponible sur [http://localhost:3000](http://localhost:3000).

> `npm install` exécute automatiquement `prisma generate` (script `postinstall`).

## Variables d'environnement

Créer un fichier `.env` à la racine. Il n'est pas versionné (voir `.gitignore`).

| Variable                              | Rôle                                                              |
| ------------------------------------- | ----------------------------------------------------------------- |
| `DATABASE_URL`                        | URL de connexion PostgreSQL                                       |
| `BETTER_AUTH_URL`                     | URL publique de l'application (côté serveur)                      |
| `NEXT_PUBLIC_BETTER_AUTH_URL`         | Même URL, exposée au navigateur                                   |
| `GOOGLE_CLIENT_ID`                    | Identifiant OAuth Google (connexion avec Google)                  |
| `GOOGLE_CLIENT_SECRET`                | Secret OAuth Google                                               |
| `EMAIL_USER`                          | Adresse Gmail utilisée pour envoyer les e-mails (SMTP)            |
| `EMAIL_APP_PASSWORD`                  | Mot de passe d'application Gmail                                  |
| `EMAIL_VERIFICATION_CALLBACK_URL`     | URL de retour après vérification d'e-mail (fonctionnalité désactivée pour l'instant) |
| `NEXT_PUBLIC_PAYPAL_ENV`              | `sandbox` ou `live`                                               |
| `NEXT_PUBLIC_PAYPAL_SANDBOX_CLIENT_ID` | Client ID PayPal (environnement sandbox)                         |
| `NEXT_PUBLIC_PAYPAL_LIVE_CLIENT_ID`   | Client ID PayPal (environnement live)                             |

Exemple :

```env
DATABASE_URL="postgresql://user:password@localhost:5432/portfolio"
BETTER_AUTH_URL="http://localhost:3000"
NEXT_PUBLIC_BETTER_AUTH_URL="http://localhost:3000"
GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""
EMAIL_USER="votre-adresse@gmail.com"
EMAIL_APP_PASSWORD=""
NEXT_PUBLIC_PAYPAL_ENV="sandbox"
NEXT_PUBLIC_PAYPAL_SANDBOX_CLIENT_ID=""
NEXT_PUBLIC_PAYPAL_LIVE_CLIENT_ID=""
```

## Scripts disponibles

| Commande            | Description                                              |
| ------------------- | -------------------------------------------------------- |
| `npm run dev`       | Serveur de développement Next.js (Turbopack)             |
| `npm run build`     | Build de production                                      |
| `npm run start`     | Démarre le build de production                           |
| `npm run lint`      | Analyse ESLint                                           |
| `npm run email`     | Prévisualisation des e-mails React Email sur le port 3001 |

## Base de données

Le schéma Prisma se trouve dans `prisma/schema.prisma` (PostgreSQL). Commandes utiles :

```bash
npx prisma migrate dev     # crée et applique une migration en développement
npx prisma migrate deploy  # applique les migrations en production
npx prisma studio          # interface de consultation des données
```

## Déploiement

Les origines autorisées pour l'authentification sont déclarées dans `auth.ts` (`trustedOrigins`). Avant tout déploiement, vérifier que l'URL du site y figure et que les variables d'environnement sont renseignées sur la plateforme d'hébergement.

## Documents de conception

Le dossier contient aussi un pack de conception pour refondre le portfolio :

- `BRIEF_PORTFOLIO.md` : brief artistique (intention, palette, structure des sections).
- `.agents/skills/portfolio-editorial-design/SKILL.md` : skill destinée aux agents de code.
- `chart-graphique.md` : charte graphique (couleurs principales, secondaires et neutres).

Pour l'utiliser : transmettre `BRIEF_PORTFOLIO.md` à l'agent de code avec le lien du dépôt, lui demander de lire la skill avant toute modification, puis d'afficher un plan de design et une prévisualisation desktop/mobile avant d'écrire le code. Le pack est un brief : il ne modifie pas le site déployé.

## Auteur

**Abdouraouf Youssouf** — développeur web (React, Next.js).
