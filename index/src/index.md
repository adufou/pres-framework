---
title: "Presentation Framework"
---

# 🎯 Observable Framework Presentations

Welcome to the presentation framework! This is your hub for all presentations built with **Observable Framework**, **TypeScript**, and **pnpm**.

## Featured Presentations

- **[Hello World Demo](/hello-world/)** — A demonstration of Observable Framework capabilities with TypeScript, interactive code, and data visualizations using Observable Plot.

---

## 🚀 Quick Start

Each presentation is a standalone Observable Framework project in the `presentations/` folder.

### Development

To work on a specific presentation:

```bash
pnpm dev:presentation-name
```

Then open your browser to the development server (usually `http://localhost:3000`).

### Preview All

To preview all presentations together (static build):

```bash
pnpm preview
```

This builds all projects and serves them at `http://localhost:8080`.

### Deploy

To deploy to GitHub Pages:

```bash
pnpm deploy
```

---

## 📚 Technologies

- **Framework**: [Observable Framework](https://observablehq.com/framework)
- **Package Manager**: [pnpm](https://pnpm.io/)
- **Language**: TypeScript
- **Visualization**: [Observable Plot](https://observablehq.com/plot)

---

## 📁 Project Structure

```
pres-framework/
├── index/                     # Landing page (this project)
├── presentations/
│   └── hello-world/           # Demo presentation
├── shared/                    # Shared configs & theme
├── tsconfig.base.json         # Shared TypeScript config
└── pnpm-workspace.yaml        # Workspace configuration
```

---

## ✨ Features

✅ TypeScript support
✅ pnpm workspaces for efficient dependency management
✅ Shared theme and configuration
✅ Individual presentation isolation
✅ Easy preview and deployment to GitHub Pages

---

Made with ❤️ using [Observable Framework](https://observablehq.com/framework)
