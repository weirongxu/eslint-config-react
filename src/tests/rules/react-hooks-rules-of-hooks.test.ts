import '../setup'

import dedent from 'dedent'
import { describe, expect, it } from 'vitest'

import { lintHelper } from '../helper'

describe('react-hooks-rules-of-hooks', () => {
  it('should error on conditional hook', async () => {
    const result = await lintHelper.fromContent(
      dedent`
        import { useEffect } from 'react'

        function App() {
          if (true) {
            useEffect(() => {}, [])
          }
        }
      `,
    )
    expect(result).toRuleCount(1, {
      rule: 'react-hooks/rules-of-hooks',
    })
  })

  it('should pass with correct hook usage', async () => {
    const result = await lintHelper.fromContent(
      dedent`
        import { useEffect } from 'react'

        function App() {
          useEffect(() => {}, [])
        }
      `,
    )
    expect(result).toRuleCount(0, {
      rule: 'react-hooks/rules-of-hooks',
    })
  })
})
