# Souvik Seal — Academic Website (Version 1)

A responsive, accessible academic website rebuilt from scratch for GitHub Pages. No Jekyll, Node, npm, or build process is needed.

## Contents

- `index.html` — Landing page with research, selected work, software, bio, and contact
- `publications.html` — Selected publications with clickable topic filters
- `software.html` — Software directory
- `teaching.html` — Teaching, mentoring, and background
- `assets/style.css` — All styling and responsive layouts
- `assets/site.js` — Mobile navigation, publication filters, automatic year
- `assets/spatial-map.svg` — Original illustrative tissue pattern (not experimental data)
- `assets/favicon.svg` — Site icon
- `.nojekyll` — Tells GitHub Pages to serve files as written

## Preview locally

From the website folder:

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000` in a web browser.

## Deploy to GitHub Pages

1. Back up your existing `sealx017/sealx017.github.io` repository (or create a new branch).
2. Remove old AcademicPages/Jekyll files from the deployment branch before replacing the site, to avoid old conflicting pages and assets. Keep your `.git` directory and any archival material you want separately.
3. Copy the **contents** of this folder to the root of the `sealx017.github.io` repository and commit.
4. In GitHub, open **Settings → Pages**. Set **Deploy from a branch**, choose your deployment branch (`master` if using the current repository) and `/(root)`.
5. Visit https://sealx017.github.io/ after Pages publishes your commit.

No changes to your GitHub repository have been made by this package.

## Personalization checklist

- **Headshot:** The homepage currently references the image URL from your existing site's config (`https://i.imgur.com/WRvfP2d.jpg`). For reliable loading, save an image you have permission to use in `assets/portrait.jpg`, then update the `<img src>` in `index.html`. A monogram fallback appears if the external image cannot load.
- **Full CV:** Add a current PDF if desired, after verifying its information. No PDF is included because the live CV was outdated.
- **Publications:** Edit `publications.html` to update your selected papers and filtering categories. Google Scholar is linked for the complete list.
- **Teaching:** Verify teaching offerings before adding dates or student names. The page currently avoids identifying trainees or announcing unconfirmed courses.
- **Research:** Update descriptions to emphasize emerging work when it becomes public.
- **Domain:** Canonical URLs and sitemap assume `sealx017.github.io`.

## Design / accessibility notes

- Semantic HTML, skip navigation, keyboard-accessible menu and filter controls
- Responsive layouts for phone, tablet, and desktop
- Reduced-motion CSS, visible focus state, descriptive image text
- Core content renders without JavaScript; it is only needed for filters and small interactions
- Fonts use Google Fonts with local system font fallbacks

## Sources reviewed (October 2026)

- MUSC faculty and Hollings Cancer Center profile for appointments/affiliation
- Journal and PubMed publication entries for displayed paper metadata / DOIs
- Existing `sealx017.github.io` repository for the prior headshot and profile links
- Public GitHub repositories for open-source packages

This is a proposed design and should be reviewed before deploying over the existing website.
