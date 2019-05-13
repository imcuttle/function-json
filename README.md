# function-json

[![Build status](https://img.shields.io/travis/imcuttle/function-json/master.svg?style=flat-square)](https://travis-ci.org/imcuttle/function-json)
[![Test coverage](https://img.shields.io/codecov/c/github/imcuttle/function-json.svg?style=flat-square)](https://codecov.io/github/imcuttle/function-json?branch=master)
[![NPM version](https://img.shields.io/npm/v/function-json.svg?style=flat-square)](https://www.npmjs.com/package/function-json)
[![NPM Downloads](https://img.shields.io/npm/dm/function-json.svg?style=flat-square&maxAge=43200)](https://www.npmjs.com/package/function-json)
[![Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://prettier.io/)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg?style=flat-square)](https://conventionalcommits.org)

> Make function to be serializable

## Installation

```bash
npm install function-json
# or use yarn
yarn add function-json
```

## Usage

```javascript
const { stringify, parse } = require('function-json')

parse(stringify((a, b) => a + b))(1, 23) === 24

parse(
  stringify({
    fn: (a, b) => a + b
  })
).fn(1, 23) === 24
```

## Contributing

- Fork it!
- Create your new branch:  
  `git checkout -b feature-new` or `git checkout -b fix-which-bug`
- Start your magic work now
- Make sure npm test passes
- Commit your changes:  
  `git commit -am 'feat: some description (close #123)'` or `git commit -am 'fix: some description (fix #123)'`
- Push to the branch: `git push`
- Submit a pull request :)

## Authors

This library is written and maintained by imcuttle, <a href="mailto:moyuyc95@gmail.com">moyuyc95@gmail.com</a>.

## License

MIT - [imcuttle](https://github.com/imcuttle) 🐟
