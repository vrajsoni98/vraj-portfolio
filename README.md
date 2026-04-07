# Vraj Soni — Portfolio

A personal portfolio built with React, showcasing my work as a Full-Stack & AI Software Developer.

**Live site:** [vrajsoni98.github.io/vraj-portfolio](https://vrajsoni98.github.io/vraj-portfolio)

---

## Tech Stack

- **React 18** — component-based UI
- **CSS custom properties** — dark/light theme switching (dark default)
- **Canvas API** — animated neural network background
- **Swiper.js** — testimonials carousel
- **FormSubmit** — contact form backend
- **gh-pages** — deployment to GitHub Pages

---

## Features

- Dark mode by default with light mode toggle (persisted in localStorage)
- Animated neural network canvas background
- Tabbed Experience / Education timeline
- Project cards with gradient headers and tech chip badges (no mismatched images)
- Filterable project grid with AI, Fullstack, Backend, Frontend categories
- Responsive layout with collapsible sidebar navigation

---

## Project Structure

```
src/
├── components/
│   ├── background/     # Canvas neural network animation
│   ├── sidebar/        # Fixed nav + theme toggle
│   ├── home/           # Hero section
│   ├── about/          # Bio + stats
│   ├── resume/         # Tabbed experience / education
│   ├── portfolio/      # Filterable project grid
│   ├── testimonials/   # Swiper carousel
│   ├── blog/           # Writing archive
│   ├── contact/        # FormSubmit contact form
│   └── data/           # Data.jsx — all content in one place
└── assets/
    ├── myavatar/
    ├── reviewavatar/
    ├── logo/
    └── resume/
```

All site content (bio, work experience, projects, testimonials, etc.) lives in [`src/components/data/Data.jsx`](src/components/data/Data.jsx) — edit that file to update anything.

---

## Running Locally

```bash
npm install
npm start
```

Local dev usually runs at `http://localhost:3000`. That URL is only for your machine and is not the public site.

## Deployment

```bash
npm run deploy
```

Deploys to GitHub Pages via `gh-pages`. The `homepage` field in `package.json` controls the base URL.

## Update Workflow

To publish new changes to GitHub and refresh the live GitHub Pages site:

```bash
git add -A
git commit -m "your message"
git push origin main
npm run deploy
```

- `main` is the source branch with the full React project.
- `gh-pages` is the generated static output branch that GitHub Pages serves.
- It is normal for `gh-pages` to not contain the full source tree.

**Public site:** [https://vrajsoni98.github.io/vraj-portfolio/#home](https://vrajsoni98.github.io/vraj-portfolio/#home)

---

## Assets & Libraries

- **Avatars** — created with Apple Memojis and Canva
- **Fonts** — [Rubik](https://fonts.google.com/specimen/Rubik) via Google Fonts
- **Icons** — [Font Awesome](https://fontawesome.com/) + [Simple Line Icons](https://simplelineicons.github.io/)
- **Carousel** — [Swiper.js](https://swiperjs.com/) (`npm i swiper`)
- **Contact form** — [FormSubmit](https://formsubmit.co/)
- **Deployment** — [react-gh-pages](https://github.com/gitname/react-gh-pages)
