# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/minimal)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/minimal)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/minimal/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## What does this project use?
This is a project written in Typescript programming language, with the use of Astro web development framework which allows us to use multiple frontend frameworks, including the React UI development library.
- TypeScript: the programming language "JavaScript with types". It doesn't render anything, it's a programming language.
- React: a library specifically for building user interfaces focusing on rendering interactive UIs.
- Astro: a web framework and a static site generator used for building static websites which supports multiple frontend frameworks. It renders static HTML with optional JavaScript for interactivity.

## Setup and configuration:
Follow [Astro's official website: Install and set up Astro](https://docs.astro.build/en/install-and-setup/).

## Install other dependencies for this project:
1. React and React DOM: `npm install react react-dom`
2. Swiper (for swiper/react, swiper/modules, and swiper/css): `npm install swiper`
3. Emotion (for @emotion/styled and @emotion/react): `npm install @emotion/styled @emotion/react`
4. @astrojs/react: `npx astro add react`, otherwise the problem of [No matching renderer found](https://docs.astro.build/en/reference/errors/no-matching-renderer/) will persist and the terminal will run the project. If the previous command to install @astrojs/react doesn't work, please read [this page](https://docs.astro.build/en/guides/integrations-guide/react/) to try to install manually.
5. [vite-plugin-compression](https://www.npmjs.com/package/vite-plugin-compression): `npm i vite-plugin-compression`
6. [@astrojs/sitemap](https://www.npmjs.com/package/@astrojs/sitemap): `npm i @astrojs/sitemap`

## Translation:
Translate all the astro pages (i.e. all the astro files under the folder `pages`).

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
