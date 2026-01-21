# Personal Eslint rules for Typescript and React

## Install

```
npm install @raidou/eslint-config-react
```

## Usage

eslint.config.mjs

```javascript
import { tsconfig } from '@raidou/eslint-config-react';
export default tsconfig;
```

custom rules

```javascript
import { tsconfig } from '@raidou/eslint-config-react';
import { defineConfig } from 'eslint/config';
export default defineConfig(tsconfig, {
  rules: {
    'no-var': 'off',
  },
});
```
