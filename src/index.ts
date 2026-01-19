import { jsconfig, tsconfig, tseslint } from '@raidou/eslint-config-base';
import { Linter } from 'eslint';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import { defineConfig } from 'eslint/config';

const reactJsconfig: Linter.Config[] = defineConfig(
  jsconfig,
  reactHooks.configs.flat.recommended,
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat['jsx-runtime'],
);

const reactTsconfig: Linter.Config[] = defineConfig(
  tsconfig,
  reactHooks.configs.flat.recommended,
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat['jsx-runtime'],
);

export { reactJsconfig as jsconfig, reactTsconfig as tsconfig, tseslint };
