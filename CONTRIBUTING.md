## Table of Contents

- [Table of Contents](#table-of-contents)
- [Getting Started ](#getting-started-)
  - [Prerequisites ](#prerequisites-)
  - [Installation ](#installation-)
    - [Installing Node.js](#installing-nodejs)
    - [Installing Bun](#installing-bun)
    - [Installing Dependancies](#installing-dependancies)
- [How to Contribute ](#how-to-contribute-)
  - [File Structure ](#file-structure-)
    - [`public/`](#public)
    - [`src/`](#src)
    - [`components/`](#components)
    - [`layouts/`](#layouts)
    - [`pages/`](#pages)
    - [`styles/`](#styles)
    - [`.gitignore` \& `.gitconfig`](#gitignore--gitconfig)
    - [`.prettierrc.json` \& `.prettierignore`](#prettierrcjson--prettierignore)
    - [`astro.config.mjs`](#astroconfigmjs)
    - [`tailwind.config.mjs`](#tailwindconfigmjs)
  - [Reporting Issues](#reporting-issues)
  - [Code Contributions](#code-contributions)


## Getting Started <a name="getting-started"></a>

Hello! Welcome to Aspine. If you are serious about contributing, please take the time to read through this page for more information.

Aspine is a web-based platform designed to help students track their grades and access academic reports with ease. We believe in open collaboration and welcome contributions from developers, designers, educators, and fellow students who want to help improve the platform we've created.

This guide will walk you through how to contribute to Aspine, whether you’re fixing a bug, adding a new feature, or improving documentation. By contributing, you’re helping to make tracking acedemics a Cambridge Rindge and Latin School more accessible and efficient for our peers.

### Prerequisites <a name="prerequisites"></a>

Before contributing to Aspine, you should have a basic understanding of:

 - HTML, CSS, and JavaScript – The core technologies used to build the websites.
 - Tailwind CSS (preferred) – We use Tailwind for styling instead of traditional CSS for almost all purposes, however traditional CSS classes are not strictly prohibited, and are used in certain scenerios.
 - Astro – Our project is built with Astro, so familiarity with its component structure and templating will be critical for contributions.
 - Preact – We use Preact in Astro server islands to support dynamic elements.

If you are unfamilliar with any of these languages, tools or frameworks please refer to the list below for documentation:

 - [Astro](https://docs.astro.build/en/getting-started/), [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML), [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS), [Tailwind](https://tailwindcss.com/docs/installation/using-vite), [JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript), [Preact](https://preactjs.com/guide/v10/getting-started/)

### Installation <a name="installation"></a>

To contribute to Aspine, you’ll need to set up your development environment with Node.js and Bun. Follow the steps below to get started.

#### Installing Node.js

Node.js is required to run JavaScript outside the browser. We personally recommend installing the LTS (Long-Term Support) version, which at the time of writing is v22.

To begin, visit the official [installation page](https://nodejs.org/en/download) and download the latest LTS version for windows. Next, run the installer and follow the instructions provided, once installed, exit from the installer. After installation, in order to test that everything is setup correctly, open a window of either Command Prompt or Powershell and type in the command ```node -v```, this should return with the current version of Node. You may need to restart your prefered text editor in order to have changes take effect.

#### Installing Bun

Bun is an alternative Node.js-compatible package manager, we use bun instead of the NPM which you may be familiar with if you have written node apps before. Visit [Bun's installation docs](https://bun.sh/docs/installation) to download the latest version of bun.

#### Installing Dependancies

Once you have verified that both Bun and Node.js are installed, run the command ```bun start:first``` in the terminal of your preferred IDE, while Aspine is selected as your project folder.


This command runs the following:

- `bun i`, installs all required packages needed for bun.
- `bunx puppeteer browsers install chrome`, installs google chrome headless for puppeteer.
- `bun run start:dev`, start command for Aspine in developer mode.

## How to Contribute <a name="how-to-contribute"></a>

### File Structure <a name="file-structure"></a>

Before contributing to Aspine, it is crucial to have a solid understanding of its file structure, and what goes where. Each directory and file serves a specific purpose, and knowing where everything belongs will help you write clean and scalable code.

Whether you're fixing bugs, adding brand new features, or optimizing efficiency, knowing where to look is incredibly important in order to keep everything organized, and to let the project develop smoothly.

The following segments will go over each main directory in the project folder, and the subfolders that inhabit them:

#### `public/`

The `public/` directory contains assets that do not need to be processed by Astro or JavaScript. These files are directly accessible via their URL paths. This folder houses files such as the websites Favicon, Fonts, Images, Instructions for engine crawlers and all other static assets.

If a file does not require transformations or processing, it most likely goes in `public/`.

#### `src/`

The `src/` directory contains all of the source code of Aspine. Including the main logic of the website, components, pages, API routes, and styles. This is a superfolder that houses the vast majority of the project that contributers will tinker with.

#### `components/`

The `components/` directory contains small, reusable UI components such as buttons, navigation bars, and widgets. These components are often written in Astro (.astro) or Preact (.jsx).

If an element of a page will appear in multiple places, generally, put it in `components/`.

#### `layouts/`

The `layouts/` directory contains Layouts, which defubes the structure for multiple pages, ensuring consistency in headers, footers, and styling. Layouts use slots to insert dynamic content into pre-defined structures.

If a file is meant to wrap around multiple pages, it's going to go in `layouts/`. Often components are put in layouts such as navbars or buttons

#### `pages/`

The `pages/` directory contains every .astro file that represents an actual webpage that can be visited. It also contains backend functions that fetch and serve data to the frontend within the nested `api/` folder.

If a file corresponds to a URL, put it in `pages/`.
If a file provides data instead of a webpage, put it in `pages/api`.
#### `styles/`

The `styles/` folder houses the tradtional CSS classes used throughout the website in the `globals.css` file. If tailwind is not being used, styles should be put in here.

If a there is a CSS class to be written, put it in `pages/styles/src/globals.css`.

__IMPORTANT:__ Under no circumstances should you edit any file within `pages/styles/dist` as they are autogenerated.

#### `.gitignore` & `.gitconfig`

These are both files defining the Git settings, `.gitignore` specifies files that should not be tracked (e.g., node_modules/, .env files), and `.gitconfig` contains project-specific Git configurations, such as branch settings.

Do not modify either Git file without strict approval.

#### `.prettierrc.json` & `.prettierignore`

We use Prettier to ensure consistent code styling. `.prettierrc.json` contains formatting rules for prettier, and `.prettierignore` excludes certain files from automatic formatting.

Do not modify either Prettier file without strict approval.

#### `astro.config.mjs`

This file contains Astro’s framework settings, such as integration settings, plugins, and build options.

If you're unfamiliar with Astro, avoid modifying this file, and always get approval.

#### `tailwind.config.mjs`

This file controls Tailwind’s behavior, including theme settings, breakpoints, and custom classes. If you need a new color, spacing, or breakpoint, add it here.

Feel free to edit this file as you stylize.

```
Aspine/
│── .astro/
│── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── assets/
│       ├── fonts/
│       └── images/
│── src/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   │   ├── api/
│   │   ├── dash.astro
│   │   ├── index.astro
│   │   ├── login.astro
│   │   ├── license.md
│   │   ├── hdiw.astro
│   ├── styles/
│   │   ├── src/
│   │   └── dist/
│   ├── env.d.ts
│   └── layouts.js
```

### Reporting Issues

All issues should be reported on the [github issues page](https://github.com/Aspine/aspine3/issues)

### Code Contributions

[![Contributors](https://contrib.rocks/image?repo=aspine/aspine3)](https://github.com/aspine/aspine3/graphs/contributors)
