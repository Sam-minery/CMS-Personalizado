import {
  convertLexicalNodesToHTML,
  createNode,
  createServerFeature,
} from '@payloadcms/richtext-lexical'

import { PAYLOAD_RICHTEXT_SMALL_BODY_CLASS } from '@/constants/payloadRichTextSmallBody'

import { SmallBodyNode } from './SmallBodyNode'

const smallBodyI18n = {
  en: { label: 'Small body' },
  es: { label: 'Cuerpo pequeño' },
} as const

export const SmallBodyFeature = createServerFeature({
  feature: {
    // Misma forma que otros PayloadComponent del proyecto (p. ej. slug): string path#export evita que
    // generate:importmap resuelva a ../../../src/... (ruta inválida).
    ClientFeature: '@/lexical-features/small-body/SmallBodyFeatureClient#SmallBodyFeatureClient',
    clientFeatureProps: null,
    i18n: smallBodyI18n,
    nodes: [
      createNode({
        converters: {
          html: {
            converter: async ({
              converters,
              currentDepth,
              depth,
              draft,
              node,
              overrideAccess,
              parent,
              req,
              showHiddenFields,
            }) => {
              const childrenText = await convertLexicalNodesToHTML({
                converters,
                currentDepth,
                depth,
                draft,
                lexicalNodes: node.children,
                overrideAccess,
                parent: {
                  ...node,
                  parent,
                },
                req,
                showHiddenFields,
              })
              const style = [
                node.format ? `text-align: ${node.format};` : '',
                node.indent > 0 ? `padding-inline-start: ${node.indent * 40}px;` : '',
              ]
                .filter(Boolean)
                .join(' ')
              return `<p class="${PAYLOAD_RICHTEXT_SMALL_BODY_CLASS}"${style ? ` style='${style}'` : ''}>${childrenText}</p>`
            },
            nodeTypes: [SmallBodyNode.getType()],
          },
        },
        node: SmallBodyNode,
      }),
    ],
  },
  key: 'small-body',
})
