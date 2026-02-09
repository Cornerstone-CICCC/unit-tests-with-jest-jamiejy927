# Intro to Unit Testing (Jest)

This assignment teaches you how to write simple unit tests and run them locally and on GitHub Actions.

## Step 1: Initialize the Project (if needed)

```bash
npm init -y
```

## Step 2: Install Jest

```bash
npm install --save-dev jest
# optional: types to get editor help
npm install --save-dev @types/jest
```

Make sure your `package.json` includes:

```json
{
  "type": "module",
  "scripts": {
    "test": "jest"
  }
}
```

## Step 3: Create Source Code and Tests

Create `src/` and `__tests__/` folders if they do not exist.

Create `src/utils.js` using ES module syntax. If your instructor provided this file already, do not change it — only add tests:

```js
export function add(a, b) {
  if (typeof a !== "number" || typeof b !== "number") throw new TypeError("Numbers only");
  return a + b;
}

export function divide(a, b) {
  if (typeof a !== "number" || typeof b !== "number") throw new TypeError("Numbers only");
  if (b === 0) throw new Error("Cannot divide by zero");
  return a / b;
}

export function capitalize(str) {
  if (typeof str !== "string") throw new TypeError("String only");
  if (str.length === 0) return "";
  return str[0].toUpperCase() + str.slice(1);
}
```

Create `__tests__/utils.test.js` and write the required tests below. Use ES module imports, for example:

```js
import { add, divide, capitalize } from "../src/utils.js";
```

### Required Tests (you must include all of these)

Write tests for each function using `describe` and `test`/`it`.

`add(a, b)`
- returns `5` for `add(2, 3)`
- returns `3` for `add(-2, 5)`
- returns `0` for `add(0, 0)`
- throws `TypeError` for `add("2", 3)`

`divide(a, b)`
- returns `5` for `divide(10, 2)`
- returns `1.5` for `divide(3, 2)`
- throws `Error` for `divide(1, 0)`
- throws `TypeError` for `divide("10", 2)`

`capitalize(str)`
- returns `"Hello"` for `capitalize("hello")`
- returns `"Hello"` for `capitalize("Hello")`
- returns `""` for `capitalize("")`
- throws `TypeError` for `capitalize(123)`

### Extra Credit (simple)

Add **one additional test per function** that checks a case you think could break the function.

## Step 4: Run Tests Locally

```bash
npm test
```

## Step 5: Create a GitHub Repository

Create a new GitHub repository or use an existing one.

## Step 6: Push Code to GitHub

Push your code, including the test files, to your GitHub repository.

## Step 7: Configure GitHub Actions for Continuous Integration

Create a `.github/workflows` directory in your repository and add a YAML file, e.g., `ci.yml`. Configure GitHub Actions to run your tests on each push:

```yaml
name: Continuous Integration

on:
  push:
    branches:
      - main

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: "20"

      - name: Install dependencies
        run: npm ci

      - name: Run tests
        run: npm test
```

Note: `npm ci` requires a `package-lock.json`, so make sure you commit it.

## Step 8: Commit and Push GitHub Actions Configuration

Commit and push the GitHub Actions configuration file (`ci.yml`) to your repository.

## Step 9: Check GitHub Actions

GitHub Actions will now automatically run your tests whenever you push new code to the repository.
