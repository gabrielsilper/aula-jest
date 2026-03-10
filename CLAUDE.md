# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm test           # Run tests without coverage
npm run test:watch # Run tests in watch mode
npm run test:cov   # Run tests with coverage report
```

Run a single test file:
```bash
npx jest __tests__/math.test.js
```

Run tests matching a name pattern:
```bash
npx jest -t "soma"
```

## Architecture

This is a learning project for Jest unit testing in Node.js (CommonJS).

- `src/` — source modules under test (e.g., `math.js`)
- `__tests__/` — test files following Jest's default discovery pattern

Tests use the **Arrange/Act/Assert** pattern with `describe`/`test` blocks. Jest is configured (`jest.config.js`) with `clearMocks: true` and `collectCoverage: true` (coverage written to `coverage/` using the v8 provider).
