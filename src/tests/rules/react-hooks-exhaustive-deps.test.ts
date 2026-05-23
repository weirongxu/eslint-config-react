import '../setup'

import dedent from 'dedent'
import { describe, expect, it } from 'vitest'

import { lintHelper } from '../helper'

describe('react-hooks-exhaustive-deps', () => {
  it('should error on missing dependency in useEffect', async () => {
    const result = await lintHelper.fromContent(
      dedent`
        import { useEffect, useState } from 'react'

        function App() {
          const [value, setValue] = useState(0);
          useEffect(() => {
            console.log(value)
          }, []);
          return <div>Hello</div>
        }
      `,
    )
    expect(result).toRuleCount(1, {
      rule: 'react-hooks/exhaustive-deps',
    })
  })

  it('should not error when all dependencies are included', async () => {
    const result = await lintHelper.fromContent(
      dedent`
        import { useEffect, useState } from 'react'

        function App() {
          const [value, setValue] = useState(0);
          useEffect(() => {
            console.log(value)
          }, [value]);
          return <div>Hello</div>
        }
      `,
    )
    expect(result).toRuleCount(0, {
      rule: 'react-hooks/exhaustive-deps',
    })
  })
})
