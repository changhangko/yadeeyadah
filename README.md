# Garry Zhang — Genome Portfolio

Static bilingual portfolio prepared for GitHub + Vercel.

## Folder structure

```
index.html
css/styles.css
js/app.js
data/projects.json
data/photography.json
assets/photography/*.webp
```

## Deploy with GitHub + Vercel

1. Create a new GitHub repository.
2. Upload **the contents of this folder** to the repository root.
3. In Vercel, choose **Add New > Project** and import the repository.
4. Framework preset: **Other**.
5. Leave Build Command and Output Directory empty.
6. Deploy.

`index.html` is the site entry point. All paths are relative, so the same repository works on Vercel without a build step.

## Edit photography

- Image files are in `assets/photography/`.
- Metadata and ordering are in `data/photography.json`.
- `srcset` includes small / medium / large WebP variants for responsive loading.
- `layout.groups` is ready for the future editorial photography layout (hero, triptych, contact sheet, isolated, film strip, closing).

## Edit projects

Project copy lives in `data/projects.json`, with separate `en` and `zh` objects.

## Local preview

Because the site loads JSON with `fetch()`, do **not** double-click `index.html` from your filesystem. Use a local server instead:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`. VS Code Live Server also works.
