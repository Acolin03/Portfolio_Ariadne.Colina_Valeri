# Ariadne Colina-Valeri: Portfolio

Personal portfolio site, hosted free on GitHub Pages.

## How the site works

All text lives in one file: `assets/js/content.js`. The pages read that file and build themselves, so you never need to touch the HTML.

```
index.html              home page (projects, experience, about, contact)
project.html            one page per project, filled in automatically
resume.pdf              your resume (add it with exactly this name)
assets/js/content.js    ← THE ONLY FILE YOU EDIT
assets/css/style.css    colors and layout
assets/img/projects/    one folder per project for photos and videos
```

## Seeing your changes

Double-click `index.html` to open it in your browser. On your computer the site runs in **draft mode**: anything still marked `TODO` and any missing photo shows up in yellow, so you can see what's left to fill in. On the live site, those are hidden automatically, so an unfinished section never looks broken. To see draft mode on the live site, add `?draft=1` to the end of the address.

## Editing text

Open `assets/js/content.js` in VS Code (or Notepad), find the `TODO`, and replace it with your words. Keep the quotation marks around the text and the comma at the end of the line.

## Adding photos and videos

1. Put the file in the project's folder, for example `assets/img/projects/slam-robot/`.
2. Write its file name in `content.js`: the main photo goes in `cover`, others go in `gallery`.

Use `.jpg` or `.png` for photos and `.mp4` for videos. Keep videos short (under 30 seconds, ideally under 25 MB).

## Adding a new project

1. In `content.js`, copy one whole project block, from `{` to the matching `},`.
2. Paste it at the end of the `projects` list.
3. Change the `id` to a short name with no spaces (for example `pcb-design`).
4. Create a folder with the same name: `assets/img/projects/pcb-design/`.
5. Set `featured: true` to show it on the home page.

## Publishing (one time)

1. Push the files to GitHub (GitHub Desktop: Commit to main, then Push origin).
2. On GitHub, open the repo → **Settings** → **Pages**.
3. Under "Build and deployment", choose **Deploy from a branch**, branch **main**, folder **/ (root)**, then **Save**.
4. After a minute or two, the site is live at:
   `https://acolin03.github.io/Portfolio_Ariadne.Colina_Valeri/`

After that, every push updates the site automatically.

## Custom domain (optional, later)

Buy a domain (about $12 a year), then add it in **Settings → Pages → Custom domain**. GitHub shows the DNS records to set.
