# Contributing

## Table of Contents

1. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
2. [How to Contribute](#how-to-contribute)
   - [Reporting Issues](#reporting-issues)
   - [Requests](#requests)
   - [Code Contributions](#code-contributions)
   - [Documentation](#documentation)
3. [Workflow](#workflow)
   - [Branching](#branching)
   - [Coding Standards](#coding-standards) 
   - [Committing](#committing)
   - [Pull Requests](#pull-requests)
4. [License](#license)


## Getting Started <a name="getting-started"></a>

Hello! Welcome to Aspine.

Aspine is a web-based platform designed to help students track their grades and access academic reports with ease. We believe in open collaboration and welcome contributions from developers, designers, educators, and fellow students who want to help improve the platform we've created.

This guide will walk you through how to contribute to Aspine, whether you’re fixing a bug, adding a new feature, or improving documentation. By contributing, you’re helping to make tracking acedemics a Cambridge Rindge and Latin School more accessible and efficient for our peers.

### Prerequisites

Before contributing to Aspine, you should have a basic understanding of:

 - HTML, CSS, and JavaScript – The core technologies used to build the websites.
 - Tailwind CSS (preferred) – We use Tailwind for styling instead of traditional CSS for almost all purposes, however traditional CSS classes are not strictly prohibited, and are used in certain scenerios.
 - Astro – Our project is built with Astro, so familiarity with its component structure and templating will be critical for contributions.
 - Preact – We use Preact in Astro server islands to support dynamic elements.

If you are unfamilliar with any of these languages, tools or frameworks please refer to the list below for documentation:

 - [Astro](https://docs.astro.build/en/getting-started/), [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML), [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS), [Tailwind](https://tailwindcss.com/docs/installation/using-vite), [JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript),
[Preact](https://preactjs.com/guide/v10/getting-started/)

### Installation

To contribute to Aspine, you’ll need to set up your development environment with Node.js and Bun. Follow the steps below to get started.

#### Installing Node.js

Node.js is required to run JavaScript outside the browser. We personally recommend installing the LTS (Long-Term Support) version, which at the time of writing is v22.

To begin, visit the official [installation page](https://nodejs.org/en/download) and download the latest LTS version for windows. Next, run the installer and follow the instructions provided, once installed, exit from the installer. After installation, in order to test that everything is setup correctly, open a window of either Command Prompt or Powershell and type in the command "node -v", this should return with the current version of Node. You may need to restart your prefered text editor in order to have changes take effect.

#### Installing Bun

Bun is an alternative Node.js-compatible package manager, we use bun instead of the NPM which you may be familiar with if you have written node apps before. Visit [Bun's installation docs](https://bun.sh/docs/installation) to download the latest version of bun.

#### Installation Command

Once you have verified that both Bun and Node.js are installed, run 

```
bun start:first
```

this command runs the following:

- `bun i`, this is the installation command for bun that installs all required packages
- `bunx puppeteer browsers install chrome`, this installs google chrome headless for puppeteer
- `bun run start:dev`, this is the start command for Aspine in dev mode.

