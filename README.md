# 🎯 Observable Framework Presentation System

A modular presentation framework built with **Observable Framework**, **TypeScript**, and **pnpm workspaces**. Host unlimited presentations as a unified system on GitHub Pages.

## ✨ Features

✅ **Observable Framework** for interactive, data-driven presentations
✅ **TypeScript** with strict type checking across all projects
✅ **pnpm Workspaces** for efficient monorepo management
✅ **Shared Theme & Configuration** for consistency
✅ **Individual Isolation** - Each presentation is a standalone project
✅ **Hybrid Workflow** - Develop locally, preview all, deploy easily
✅ **GitHub Pages Ready** - One command to deploy

## 📁 Project Structure

```
pres-framework/
├── index/                          # Landing page (root presentation)
│   ├── src/
│   │   └── index.md               # Home page with links
│   ├── observable.config.ts       # Observable config
│   ├── tsconfig.json              # Extends base config
│   └── package.json
├── presentations/                  # Individual presentations
│   └── hello-world/               # Demo presentation
│       ├── src/
│       │   └── hello-world.md     # Presentation content
│       ├── observable.config.ts
│       ├── tsconfig.json
│       └── package.json
├── shared/                         # Shared assets
│   ├── theme.css                  # Global styles
│   └── observable-theme.js        # Theme configuration
├── scripts/
│   └── build-for-pages.sh         # Build script for GitHub Pages
├── tsconfig.base.json             # Base TypeScript config
├── pnpm-workspace.yaml            # Workspace definition
└── package.json                    # Root scripts & dependencies
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- pnpm 8+

### Installation

```bash
# Install dependencies
pnpm install
```

### Development

Work on a specific presentation:

```bash
# Develop the hello-world presentation
pnpm dev:hello-world

# Or develop the index/landing page
pnpm dev:index
```

The dev server will open at `http://localhost:3000` by default.

### Preview All Presentations

Build and serve all presentations together:

```bash
pnpm preview
```

Opens at `http://localhost:8080` with the full site structure:
- Home: `http://localhost:8080/`
- Hello World: `http://localhost:8080/hello-world/`

### Deploy to GitHub Pages

```bash
# Build all presentations and deploy
pnpm deploy
```

This will:
1. Build all Observable projects
2. Combine outputs into a single `dist/` directory
3. Push to the `gh-pages` branch on your GitHub repository

**Setup GitHub Pages:**
1. Go to your repository Settings → Pages
2. Set Source to "Deploy from a branch"
3. Select `gh-pages` branch and `/ (root)` folder
4. Your site will be live at `https://username.github.io/pres-framework`

## 📝 Creating a New Presentation

1. Create a new folder in `presentations/`:

```bash
mkdir presentations/my-awesome-pres
cd presentations/my-awesome-pres
```

2. Create `package.json`:

```json
{
  "name": "my-awesome-pres",
  "version": "1.0.0",
  "scripts": {
    "dev": "observable dev",
    "build": "observable build"
  },
  "devDependencies": {
    "@observablehq/framework": "^1.13.3",
    "@observablehq/plot": "^0.6.17"
  }
}
```

3. Create `observable.config.ts`:

```typescript
import { defineConfig } from "@observablehq/framework";

export default defineConfig({
  title: "My Awesome Presentation",
  pages: [
    {
      name: "index",
      path: "/",
      input: "src/index.md",
    },
  ],
  root: "/my-awesome-pres/",
});
```

4. Create `tsconfig.json`:

```json
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "outDir": "./dist"
  }
}
```

5. Create `src/index.md` with your presentation content

6. Add a link to the index landing page in `index/src/index.md`

7. Install dependencies:

```bash
cd presentations/my-awesome-pres
pnpm install
```

8. Start developing:

```bash
pnpm dev:my-awesome-pres
```

## 🎨 Customization

### Global Theme

Edit `shared/theme.css` to customize colors, fonts, and spacing across all presentations.

### Observable Theme Config

Edit `shared/observable-theme.js` to adjust Observable Framework theme settings.

### TypeScript Configuration

Edit `tsconfig.base.json` for all projects to modify TypeScript compiler options.

## 📚 Available Scripts

```bash
# Development
pnpm dev:index              # Start dev server for landing page
pnpm dev:hello-world        # Start dev server for a presentation

# Building & Deployment
pnpm build:all              # Build all projects for GitHub Pages
pnpm preview                # Build all & serve locally at :8080
pnpm deploy                 # Build all & push to gh-pages branch
```

## 🔧 Troubleshooting

### Port Already in Use

If port 3000 is already in use, Observable will try the next available port. Check the terminal output for the actual URL.

### Build Failures

Ensure all presentations have:
- `observable.config.ts` with correct `root` path
- `tsconfig.json` extending `../../tsconfig.base.json`
- `src/index.md` or similar entry point

### GitHub Pages Not Updating

1. Ensure the `gh-pages` branch exists in your repository
2. Check Settings → Pages configuration
3. Force rebuild: `rm -rf dist && pnpm deploy`

## 📖 Resources

- [Observable Framework](https://observablehq.com/framework)
- [Observable Plot Documentation](https://observablehq.com/plot)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [pnpm Workspace Documentation](https://pnpm.io/workspaces)

## 📄 License

MIT

## 🙌 Contributing

Feel free to add more presentations to this framework!

---

Made with ❤️ using Observable Framework, TypeScript, and pnpm
