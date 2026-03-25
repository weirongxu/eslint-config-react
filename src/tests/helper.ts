import { LintHelper } from '@raidou/eslint-config-base/dist/tests/helper'
import { tsconfig } from '../index'

export {
  SEVERITY,
  LintResult,
} from '@raidou/eslint-config-base/dist/tests/helper'

export const lintHelper = new LintHelper(tsconfig, 'test.tsx')
