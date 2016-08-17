# Curriculums

[![Build Status](https://travis-ci.org/ACM-Planner/curriculums.svg?branch=gh-pages)](https://travis-ci.org/ACM-Planner/curriculums) [![david](https://david-dm.org/ACM-Planner/curriculums.svg)](https://david-dm.org/ACM-Planner/curriculums) [![Docker Pulls](https://img.shields.io/docker/pulls/acmplanner/curriculums.svg?maxAge=2592000)](https://hub.docker.com/r/acmplanner/curriculums/)

This repository contains the curriculums of [Pontifical Catholic University of Chile](http://www.uc.cl/) as `JSON` to allow students to create applications.

**This is community maintained.** So [pull-requests](https://help.github.com/articles/using-pull-requests/) are welcome 😄

## How to use?

### As static page on [Github pages](https://pages.github.com/)

The main branch is `gh-pages` to allow Github to serve all this files as static assets.

You can take individual `JSON` following the project directory structure.

> **Root:** [`https://acm-planner.github.io/curriculums`](https://acm-planner.github.io/curriculums)

#### Example:

The file [`static/pregrado/ingenieria/2009/civil-computacion.json`](./static/pregrado/ingenieria/2009/civil-computacion.json) can be accessed at:

> [`https://acm-planner.github.io/curriculums/static/pregrado/ingenieria/2009/civil-computacion.json`](https://acm-planner.github.io/curriculums/static/pregrado/ingenieria/2009/civil-computacion.json)

### As NPM Module

```sh
npm install --save ACM-Planner/curriculums#gh-pages
```

Usage:

```js
'use strict';

const curriculums = require('curriculums');
const data = curriculums();

console.log(data);
```

Under the hood it uses `fs` and `JSON` parsing, so this may require additional setup when using with [webpack](https://webpack.github.io/).

### As Express.js HTTP API server

Get this code and install dependencies:

```sh
git clone https://github.com/ACM-Planner/curriculums.git
cd curriculums
npm install express cors morgan
npm install
```

Start server at port `8000`:

```sh
npm start
```

Visit [`http://localhost:8000`](http://localhost:8000).

This will work identically as the `gh-pages` version. So the following route is available:

> [`http://localhost:8000/static/pregrado/ingenieria/2009/civil-computacion.json`](http://localhost:8000/static/pregrado/ingenieria/2009/civil-computacion.json)

To get all the curriculums you can perform a `GET` to:

> [`http://localhost:8000/tree`](http://localhost:8000/tree)

## Testing

Currently we are only testing the Express.js server. We need to support JSON Schema validations.

Make sure to run before:

```sh
npm install express cors morgan
```

Run test suite:

```sh
npm test
```
