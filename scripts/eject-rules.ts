import {
  ejectRules,
  type RuleUrlMapping,
} from '@raidou/eslint-config-base/dist/eject-rules'

import { jsconfig as reactJsconfig, tsconfig as reactTsconfig } from '../src'

const REACT_HOOKS_URL_MAPPING: Partial<RuleUrlMapping> = {
  'react-hooks/': {
    baseUrl: 'https://react.dev/reference/eslint-plugin-react-hooks/lints/',
  },
}

const main = async (): Promise<void> => {
  await Promise.all([
    ejectRules(reactJsconfig, 'rules/js-rules', {
      customRuleUrlMapping: REACT_HOOKS_URL_MAPPING,
    }),
    ejectRules(reactTsconfig, 'rules/ts-rules', {
      customRuleUrlMapping: REACT_HOOKS_URL_MAPPING,
    }),
  ])
}

main().catch((err: unknown) => {
  console.error(err)
  process.exit(1)
})
