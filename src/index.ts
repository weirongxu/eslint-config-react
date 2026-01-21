import { jsconfig, tsconfig } from '@raidou/eslint-config-base';
import { Linter } from 'eslint';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import { defineConfig } from 'eslint/config';

const ignoreRules: Linter.Config = {
  rules: {
    'react-hooks/set-state-in-effect': 'off',
    'react-hooks/preserve-manual-memoization': 'off',
  },
};

const reactJsconfig: Linter.Config[] = defineConfig(
  jsconfig,
  reactHooks.configs.flat.recommended,
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat['jsx-runtime'],
  ignoreRules,
);

const reactTsconfig: Linter.Config[] = defineConfig(
  tsconfig,
  reactHooks.configs.flat.recommended,
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat['jsx-runtime'],
  ignoreRules,
);

export { reactJsconfig as jsconfig, reactTsconfig as tsconfig };
