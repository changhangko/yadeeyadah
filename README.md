# Vercel deployment note

Upload the **contents of this folder directly to the GitHub repository root**.

The repository root should visibly contain:

- `index.html`
- `vercel.json`
- `css/`
- `js/`
- `data/`
- `assets/`

In Vercel, leave **Root Directory** blank (repository root), choose **Other** / no framework, and do not set a build command.

After deployment, these URLs should load directly:
- `/css/styles.css`
- `/js/app.js`
- `/data/projects.json`

If any of those return 404, the repository folder structure is not at the deployment root.


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

## In-page project editor

Every project page now has a discreet `[ EDIT ]` button beside the close control. Editing happens only in your browser; it cannot change GitHub or Vercel directly.

Workflow:

1. Open any project and click `[ EDIT ]`.
2. Click directly into the title, brief, description, role, tools, output, year, Question, Built, Judgement, media labels, or Taste / Decision Log text.
3. Use `[ + MEDIA ]` or `[ + DECISION ]` to add entries. The small `×` control removes an entry.
4. Switch `EN / 中文` while editing to edit both language versions of the same project.
5. Click `[ SAVE PROJECTS.JSON ]`. Your browser downloads a complete replacement `projects.json`.
6. Replace `/data/projects.json` in GitHub with the downloaded file. Vercel will redeploy automatically.

For project `06 / OBSERVATION`, the photography note and photo captions are editable too. Use `[ SAVE PHOTOGRAPHY.JSON ]` and replace `/data/photography.json` in GitHub.

`Ctrl+S` / `Cmd+S` while editing also exports `projects.json`. `[ CANCEL ]` restores the content to the state from when the current edit session began.

The `[ EDIT ]` button is intentionally low-opacity until hovered. Anyone can technically edit a local browser copy, but no visitor can publish changes because the editor only downloads JSON files; it has no GitHub credentials or write access.
