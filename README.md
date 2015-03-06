# [gulp-recipe](https://github.com/PGS-dev/gulp-recipe-loader)-preprocess [![Dependency Status][depstat-image]][depstat-url]
[![NPM][npm-image]][npm-url]

Receipe for preprocessing index files.

## Configuration
### Recipe specific
#### preprocess.dev
> default: {context: {target: 'dev'}}

Preprocess devlopment configuration.

#### preprocess.dist
> default: {context: {target: 'dev'}}

Preprocess build configuration.

### Order
#### config.order.preprocess
> default: 10

## Api
### Used Hooks
#### pipes.preDevBuild

Apply preprocess] on index files in development.

#### pipes.preBuild

Apply preprocess] on index files in build.

[npm-url]: https://npmjs.org/package/gulp-recipe-preprocess
[npm-image]: https://nodei.co/npm/gulp-recipe-preprocess.png?downloads=true
[depstat-url]: https://david-dm.org/PGS-dev/gulp-recipe-preprocess
[depstat-image]: https://img.shields.io/david/PGS-dev/gulp-recipe-preprocess.svg?style=flat