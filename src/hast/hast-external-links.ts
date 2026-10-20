import { defineHastPlugin } from 'satteri'

export const hastExternalLinks = defineHastPlugin({
  name: 'hast-external-links',
  element: {
    filter: ['a'],
    visit(node, context) {
      if (node.properties.href?.startsWith('http')) {
        context.appendChild(node, {
          type: 'element',
          tagName: 'span',
          properties: { ariaHidden: 'true' },
          children: [
            {
              type: 'text',
              value: '🔗'
            }
          ]
        })
      }
    }
  }
})
