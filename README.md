# Tailwind CSS Playground

A framework agnostic [TailwindCSS](https://github.com/tailwindlabs/tailwindcss) playground for rapid local UI development. Intended to expedite front end development locally.


## Requirements

### Software

- [Node - v14.x](https://nodejs.org/download/release/latest-v14.x/)



## Commands

#### Install

```
npm i;
```

This command installs the dependencies in the local node_modules folder.

#### Build 

```
npm run build;
```

This command builds the assets for production in the dist folder using the Webpack bundler.

#### Start 

```
npm run start;
```

This command builds the assets and serves them to the Webpack dev server for local development, testing, and protyping.

#### Lint

```
npm run lint;
```

This command lints all css and javascript files.

#### Lint Fix

```
npm run lint:fix;
```

This command lints and fixes all css and javascript files.

#### Lint JS

```
npm run lint:js;
```

This command lints only the javascript files.

#### Lint JS Fix

```
npm run lint:js:fix;
```

This command lints and fixes only the javascript files.

#### Lint CSS

```
npm run lint:css;
```

This command lints only the css files.

#### Lint CSS Fix

```
npm run lint:css:fix;
```

This command lints and fixes only the css files.



## Source

### HTML

Entry point for any html templates, components, partials, etc.

### Javascript

Entry point to the javascript related assets.

### Styles

Entry point for sass/scss styles, however Tailwind CSS should cover about 99.9% (just saying).



## Webpack

### Dev Server

Using the [Wepback Dev Server Plugin](https://www.npmjs.com/package/webpack-dev-server), the development server that provides live reloading. Reloads on entry and view changes.


### Rules w/Loaders

#### Javascript

###### [Babel Loader](https://www.npmjs.com/package/babel-loader) `babel-loader`

This package allows transpiling JavaScript files using Babel and webpack.

#### Styles

###### [SASS Loader](https://www.npmjs.com/package/sass-loader) `sass-loader`

Loads a Sass/SCSS file and compiles it to CSS.

###### [PostCSS Loader](https://www.npmjs.com/package/postcss-loader) `postcss-loader`

Loader to process CSS with [PostCSS](https://www.npmjs.com/package/postcss). PostCSS is a tool for transforming styles with JS plugins. These plugins can lint your CSS, support variables and mixins, transpile future CSS syntax, inline images, and more.

_PostCSS Plugins_

- [PostCSS Imports](https://www.npmjs.com/package/postcss-import): Transform @import rules by inlining content. This plugin can consume local files, node modules or web_modules.
- [Autoprefixer](https://www.npmjs.com/package/autoprefixer): PostCSS plugin to parse CSS and add vendor prefixes to CSS rules using values from Can I Use. It is recommended by Google and used in Twitter and Alibaba.
- [Tailwind CSS](https://www.npmjs.com/package/tailwindcss): A utility-first CSS framework for rapidly building custom user interfaces.
- [CSS Nano](https://www.npmjs.com/package/cssnano): Takes your nicely formatted CSS and runs it through many focused optimisations, to ensure that the final result is as small as possible for a production environment.

###### [CSS Loader](https://www.npmjs.com/package/css-loader) `css-loader`

The css-loader interprets @import and url() like import/require() and will resolve them.

###### [MiniCssExtractPlugin](https://www.npmjs.com/package/mini-css-extract-plugin) `MiniCssExtractPlugin.loader`

This plugin extracts CSS into separate files. It creates a CSS file per JS file which contains CSS. It supports On-Demand-Loading of CSS and SourceMaps.


### Plugins

###### [HTML Webpack Plugin](https://www.npmjs.com/package/html-webpack-plugin) `html-webpack-plugin`

This is a webpack plugin that simplifies creation of HTML files to serve your webpack bundles. This is especially useful for webpack bundles that include a hash in the filename which changes every compilation. You can either let the plugin generate an HTML file for you, supply your own template using lodash templates or use your own loader.

###### [Mini CSS Extract Plugin](https://github.com/webpack-contrib/mini-css-extract-plugin) `mini-css-extract-plugin`

This allows your app to use css modules that will be moved into a separate CSS file instead of inside one of your module entries!

###### [Terser Webpack Plugin](https://github.com/webpack-contrib/terser-webpack-plugin) `terser-webpack-plugin`

A JavaScript parser and mangler/compressor toolkit for ES6+. This minifies your app in order to load faster and run less javascript.



## Lint

### Javascript

###### [Airbnb Base](https://www.npmjs.com/package/eslint-config-airbnb-base) `airbnb-base`

This package provides Airbnb's base JS .eslintrc (without React plugins) as an extensible shared config.

###### [ESLint](https://www.npmjs.com/package/eslint) `eslint:recommended`

ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.

###### [Prettier](https://www.npmjs.com/package/prettier) `plugin:prettier/recommended`

Prettier is an opinionated code formatter. It enforces a consistent style by parsing your code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary.

### Styles

###### [Stylelint SASS Guidelines](https://www.npmjs.com/package/stylelint-config-sass-guidelines) `stylelint-config-sass-guidelines`

A stylelint config inspired by sass-guidelin.es. This linter has been designed / tested with SCSS syntax based on the SCSS guidelines documented in https://sass-guidelin.es/. It is intended for use with SCSS syntax, not Sass (tab style) syntax.



## Contributing

If you're interested in contributing to Tailwind CSS Playground, feel free to submit an issue or pull request.

## Donate

Feel free to [buy me a beer](https://www.paypal.com/donate?business=GJKCBDMVCTHW6&item_name=beer+belly&currency_code=USD). 
