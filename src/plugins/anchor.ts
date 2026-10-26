import { defineHastPlugin } from 'satteri'

export const Anchor = defineHastPlugin({
  name: 'anchor',
  element: {
    filter: ['a'],
    visit(node, ctx) {
      const href = node.properties.href
      if (typeof href === 'string' && href.endsWith('#')) {
        ctx.setProperty(node, 'target', '_blank')
        ctx.setProperty(node, 'rel', 'noopener noreferrer')
      }
    }
  }
})
