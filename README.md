# Kraft Heinz Web Component Library

## Overview
This is a library which we will use to share components amongst projects throughout the Kraft-Heinz engagement.

This library is a monorepo, which means it is a single repository that contains multiple packages published to NPM. These packages can rely on each other, or be independent.

The intended structure is to have one `core` package that focuses on atomic, functional components that are style agnostic, and then have additional packages for style themes and project-specific implementations.

This is a work in progress and will continue to evolve, as needed.

```
- packages
    // bare-bones components to style/augment as needed
    - core 

    // Brand specific packages that import `core` modules and export styled components
    - kraft
    - heinz

    // Other potential packages
    - utils
    - project-a-specific
    - contentful-parser
```

## What is this built with?

### Typing and Compilation
- [Typescript](https://www.typescriptlang.org/) is the language we're using to help javascript be more strongly typed.
- [Lerna](https://github.com/lerna/lerna) is the library we use to set this up as a monorepo
- [Rollup](https://rollupjs.org/guide/en/) is the module bundler we're using to compile the packages

### UI and Styles
- [React](https://beta.reactjs.org/) is the library we're using for components, although this could easily be swapped out for another UI library
- [Styled-Components](https://styled-components.com/) is our css-in-js choice for scoping our styles in jsx


<!-- Still to come -->
### Testing
- [Jest](https://jestjs.io/) Our test runner
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) Framework for writing react tests that focus on DOM interaction and a user-centric testing paradigm

### Developer Experience Tooling
- [Storybook](https://storybook.js.org/) For testing and documenting and publishing components
- [Plop](https://github.com/plopjs/plop) Code generation for quickly and seamlessly creating consistent components
- [ESLint](https://eslint.org/) For linting
- [Prettier](https://prettier.io/) For automatic adherence to linting rules