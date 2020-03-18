# template-typescript-parcel-react

[![Build][build]][build-badge]
[![Coverage][codecov-shield]][codecov]

> Template to build React apps using Parcel and optionally alias React to Preact X.

This project aliases react to preact for smaller bundles. To opt out, remove the following field from [package.json](package.json):

```json
"alias": {
  "react": "preact/compat",
  "react-dom": "preact/compat"
}
```

## Getting Started

Clone the template:

```bash
git clone git@github.com:metonym/template-typescript-parcel-react.git
cd template-typescript-parcel-react
```

Install its dependencies:

```bash
yarn install
```

## Available Scripts

### `yarn start`

Runs the project in development mode and watches for any changes.

### `yarn build`

Builds the project for production.

### `yarn test`

Runs test suites and generates a coverage report.

### `yarn test:tdd`

Runs tests in Test-driven Development (TDD) mode.

## Linting, formatting and committing

To ensure that committed code follows conventions, this project uses `prettier`, `tslint` and git hooks (via `husky`) to automate the linting and formatting of code and commit messages.

## Continuous Integration

This template uses `Travis CI` to build and test remote changes.

## License

[MIT](LICENSE)

[build]: https://travis-ci.com/metonym/template-typescript-parcel-react.svg?branch=master
[build-badge]: https://travis-ci.com/metonym/template-typescript-parcel-react
[codecov]: https://codecov.io/gh/metonym/template-typescript-parcel-react
[codecov-shield]: https://img.shields.io/codecov/c/github/metonym/template-typescript-parcel-react.svg
