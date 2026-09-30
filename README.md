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


## About page / portrait

The About page now includes a genome-decoded profile portrait and bilingual Design Concept section. The portrait file is:

`/assets/profile/garry-profile.webp`

Replace that file with another WebP using the same filename if you want to change the portrait without touching code.

## Private edit mode

The project `[ EDIT ]` button is hidden during normal visits. Open `/?edit=1` to trigger the editor prompt. Before deploying, change this line in `/js/app.js`:

`const EDITOR_PASSWORD='change-this-password';`

This is only a front-end deterrent; editing still exports JSON locally and does not write to GitHub automatically.


## V9 interaction update
- Denser Genome mutations: desktop targets ~3 appearances per project, mobile ~2, capped by available rows.
- Mutation interaction: first click/tap locks the decoded project preview; second click/tap on the same mutation opens the project. The decoded popup remains clickable.
- Project entry transition: ACGT fills the viewport, then decodes the project ID/title/brief/meta/year before the project page appears. Works from Genome, Project Index, and Next Project.
- Editor gate now shows `[ EDITOR ON ]` and automatically enters project edit mode after opening a project when unlocked.
- Header identity updated: larger name, role uses the same foreground color.
- Palette neutralised to remove the previous green/olive cast.

Editor URL: `/?edit=1`
Before deployment, set `EDITOR_PASSWORD` in `/js/app.js` to a new portfolio-only password. This client-side password is only a deterrent and is visible in source code.


## Studio Library case study
Project 07 embeds a sanitised interactive demo from `/projects/studio-library/`. The demo uses fictional portfolio-safe data and is intentionally separated from the main Genome UI so it can retain its own Bates Smart blue product identity.


## Apple-like framed preview
The Studio Library case study now uses a rounded product-showcase frame with persistent live interaction and hidden iframe scrollbars. The embedded demo remains at `/projects/studio-library/index.html`.
