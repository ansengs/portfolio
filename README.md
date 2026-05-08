# Andrew Sengsourichanh — Portfolio

> Developer & Automation Engineer · Wooster, OH  
> **Live site:** `https://ansengs.github.io/portfolio`

A static portfolio with zero dependencies — no build step, no framework, no server.

---

## Stack

| File | Purpose |
|------|---------|
| `index.html` | App shell & all panel markup |
| `style.css` | All styles (CSS variables, responsive layout, animations) |
| `app.js` | Tab navigation & project card interactions |

Fonts loaded from Google Fonts CDN. Everything else is vanilla HTML/CSS/JS.

---

## Deploy to GitHub Pages

```bash
# 1. Create a new repo on github.com named "portfolio"

# 2. Push the files
git init
git add .
git commit -m "initial commit"
git remote add origin https://github.com/ansengs/portfolio.git
git push -u origin main
```

**3. Enable Pages:**  
Repo → **Settings → Pages → Source → Deploy from branch → `main` / `/ (root)`** → Save

Site goes live at `https://ansengs.github.io/portfolio` within ~60 seconds.

---

## Sections

- **Home** — intro, terminal card, stat strip
- **Skills** — 8 skill categories with pill tags
- **Experience** — timeline of work & education
- **Projects** — project cards linking to GitHub
- **Contact** — links + certifications

---

## License

MIT
