# Alex Rivera — Portfolio Website

A modern, responsive portfolio website built with **Next.js 15 App Router** and CSS Modules.

---

## Folder Structure

```
portfolio/
├── app/                    # All pages (App Router)
│   ├── layout.tsx          # Root layout — wraps ALL pages with Header + Footer
│   ├── globals.css         # Global CSS variables, reset, and shared utilities
│   ├── page.tsx            # Home page  →  /
│   ├── page.module.css     # CSS for home page only
│   ├── about/
│   │   └── page.tsx        # About Me page  →  /about
│   ├── skills/
│   │   └── page.tsx        # Skills page  →  /skills
│   ├── projects/
│   │   └── page.tsx        # Projects page  →  /projects
│   ├── education/
│   │   └── page.tsx        # Education page  →  /education
│   ├── achievements/
│   │   └── page.tsx        # Achievements page  →  /achievements
│   ├── hobbies/
│   │   └── page.tsx        # Hobbies page  →  /hobbies
│   ├── gallery/
│   │   └── page.tsx        # Gallery page  →  /gallery
│   ├── resume/
│   │   └── page.tsx        # Resume page  →  /resume
│   └── contact/
│       └── page.tsx        # Contact page  →  /contact
│
├── components/             # Reusable components used on every page
│   ├── Header.tsx          # Navigation header
│   ├── Header.module.css
│   ├── Footer.tsx          # Site footer
│   └── Footer.module.css
│
└── public/                 # Static assets (images, icons)
```

## How App Router Works

In Next.js App Router:
- Every **folder** inside `app/` becomes a **URL route**
- Every folder needs a `page.tsx` file to be a real page
- `layout.tsx` wraps every page — that is where Header and Footer live
- `page.module.css` is scoped CSS — styles only apply to that page

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## How to Customize

1. **Change your name**: Search for "Alex Rivera" across files and replace with your name
2. **Update contact info**: Edit the `contactInfo` array in `app/contact/page.tsx`
3. **Add projects**: Edit the `projects` array in `app/projects/page.tsx`
4. **Update skills**: Edit the `skillGroups` array in `app/skills/page.tsx`
5. **Change colors**: Edit CSS variables at the top of `app/globals.css`
6. **Replace placeholder images**: Replace `picsum.photos` URLs with your own image paths in `/public`

## Tech Stack

- **Next.js 15** — React framework with App Router
- **TypeScript** — Type-safe JavaScript
- **CSS Modules** — Scoped, component-level styling
- **Google Fonts** — Playfair Display + DM Sans
