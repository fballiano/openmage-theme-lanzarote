#!/bin/sh

#npm install -D tailwindcss
npm install
npx tailwindcss -i ./css/styles.src.css -o ./css/styles.css --watch --minify
