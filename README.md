# Candy Motorsport Heritage Archive

This is the modular static website. Publish all files and folders at the repository root.

- `index.html`: page shell
- `styles.css`: styling
- `app.js`: navigation and rendering
- `data/archive.js`: archive chapters, season results and historical records
- `assets/images/`: permanently stored team portraits, liveries and archive imagery

To update the website, edit only the relevant file(s) and commit to `main`. Netlify deploys automatically. Keep image filenames referenced by `data/archive.js` and `app.js` intact.

Browser-local notes are still stored in localStorage and are not shared publicly until incorporated into the source.
