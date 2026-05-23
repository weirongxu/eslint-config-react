import { LintHelper } from '@raidou/eslint-config-base/dist/tests/helper'

import { tsconfig } from '../index'

export {
  LintResult,
  SEVERITY,
} from '@raidou/eslint-config-base/dist/tests/helper'

export const lintHelper = new LintHelper(tsconfig, 'test.tsx')
