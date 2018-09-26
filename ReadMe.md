## Quickstart_basic !

QB is a automated workflow with Npm & Webpack-Encore.
It handles compression of Js and Scss files and copies them to a dist folder.
It also copies all the imgages and html files to the dist folder.
So at the end all you have to do is publish the dist folder to your webhosting server

## How to use this project

-1 Clone the repo  
-2 Point the clone to your own repo  
-3 `npm install` -- run the command to install dependencies  
-4 Do your work in the 'src' directory  
-5 Commands build your dist folder.

- `npm run dev` -- wil do a one time dev run
- `npm run watch` -- wil run in the background and do a dev build upon file change
- `npm run build` -- wil do a one time build run and minify js and css files
