# Lanzarote: an OpenMage theme based on TailwindCSS and DaisyUI

This is a project for a modern frontend theme for OpenMage:
- base OpenMage theme: RWD
- CSS framework: [TailwindCSS](https://tailwindcss.com) + [DaisyUI](https://daisyui.com)
- package manager: [Bun](https://bun.sh)

## How to run

### I don't need any customization

Install, activate and enjoy as you would with any other frontend theme for OpenMage.

### I want to customize it

Create a child theme and go on from there as you would usually do.

### I want to contribute with development

1. Install [Bun](https://bun.sh) on your machine
1. Install `Lanzarote` in your OpenMage project using composer and enable it in OpenMage's backend
2. `cd skin/frontend/lanzarote/default/css` and run `bun install` to install all dependencies
3. run `./watch.sh` to enable the automatic compiling of the CSS
3. modify `src/styles.css` as you wish
4. refresh your browser and enjoy