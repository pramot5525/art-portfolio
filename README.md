# Art Portfolio — Pramot Natemanee

Personal portfolio website for Pramot Natemanee (Art), Senior Software Engineer.

**Live site:** [https://pramot5525.github.io/art-portfolio/](https://pramot5525.github.io/art-portfolio/)

## Tech Stack

- [Next.js](https://nextjs.org/) 16 — static export
- TypeScript
- CSS (custom, no UI framework)
- GitHub Actions — automated deploy to GitHub Pages

## Local Development

```bash
# Install dependencies
npm install

# Start dev server at http://localhost:3000
npm run dev

# Build static output to ./out
npm run build
```

## Deployment

Pushes to `main` automatically trigger the GitHub Actions workflow which builds and deploys to GitHub Pages.

Manual trigger is also available via **Actions → Deploy to GitHub Pages → Run workflow**.
