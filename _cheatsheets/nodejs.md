# NodeJs CheatSheat

### Npm install

- install global `npm install -g`
- install local `npm install`

### Npm install dependencies

- install global dependency `npm install <name of dependency> -g` or `npm i -g <dependency>`
- install local dependency `npm install <name of dependency>`
- install local dev dependency `npm install <name of dependency> --save`

### Npm Update

- Check for updates + install global `npm i -g npm-check-updates`
- Check for updates + install local `npm i npm-check-updates`
- Check for updates `npx npm-check-updates`

### Npm Package.json Dependency Version Updates

- 1 Installl npm-check-updates iether local or global
- 2 run `npm-check-updates`
- 3 run `ncu -u` to update package.json dependencies version to the latest
- 4 run `npm install` to install the new versions

### Npm Audit vulnerabilities

- Check for valnerabilities & there details `npm audit`
- Fix the valnerabilities `npm audit fix`

### When updating dependencies

1 Check for updates `npx npm-check-updates`
2 If vulnerabilities -> delete `package-lock.json`
3 Check for updates and update the package.json file `npx npm-check-updates -u`
4 Check again `npm audit`
