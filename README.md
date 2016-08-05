# Curriculums

[![Build Status](https://travis-ci.org/ACM-Planner/curriculums.svg?branch=gh-pages)](https://travis-ci.org/ACM-Planner/curriculums)

This repository contains the curriculums of [Pontifical Catholic University of Chile](http://www.uc.cl/) as `JSON` to allow students to create applications.

**This is community maintained.** So [pull-requests](https://help.github.com/articles/using-pull-requests/) are welcome 😄

## How to use?

### As static page on [Github pages](https://pages.github.com/)

The main branch is `gh-pages` to allow Github to serve all this files as static assets.

You can take individual `JSON` following the project tree structure.

> **Root:** [`https://acm-planner.github.io/curriculums`](https://acm-planner.github.io/curriculums)

#### Example:

The file [`static/pregrado/ingenieria/2009/civil-computacion.json`](./static/pregrado/ingenieria/2009/civil-computacion.json) can be accesses at:

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
npm install express cors
npm install
```

Start server at port `5000`:

```sh
npm start
```

Visit [`http://localhost:5000`](http://localhost:5000).
