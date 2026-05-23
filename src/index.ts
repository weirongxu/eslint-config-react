import { jsconfig, tsconfig } from '@raidou/eslint-config-base'
import type { Linter } from 'eslint'
import { defineConfig } from 'eslint/config'
import reactPlugin from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'

const ignoreRules: Linter.Config = {
  rules: {
    'react-hooks/set-state-in-effect': 'off',
    'react-hooks/preserve-manual-memoization': 'off',
    'react-hooks/refs': 'off',
  },
}

const reactJsconfig: Linter.Config[] = defineConfig(
  jsconfig,
  reactHooks.configs.flat.recommended,
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat['jsx-runtime'],
  ignoreRules,
)

const reactTsconfig: Linter.Config[] = defineConfig(
  tsconfig,
  reactHooks.configs.flat.recommended,
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat['jsx-runtime'],
  ignoreRules,
)

export { reactJsconfig as jsconfig, reactTsconfig as tsconfig }
