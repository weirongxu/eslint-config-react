import dedent from 'dedent'
import { describe, expect, it } from 'vitest'
import { lintHelper } from '../helper'
import '../setup'

describe('react-no-array-index-key', () => {
  it('should not error when using array index as key', async () => {
    const result = await lintHelper.fromContent(
      dedent`
        const items = ['a', 'b', 'c']
        items.map((item, index) => <span key={index}>{item}</span>)
      `,
    )
    expect(result).toRuleCount(0, {
      rule: 'react/no-array-index-key',
    })
  })
})
