import { PAYLOAD_RICHTEXT_SMALL_BODY_CLASS } from '@/constants/payloadRichTextSmallBody'
import { isHTMLElement } from '@lexical/utils'
import {
  $applyNodeReplacement,
  $createParagraphNode,
  ElementNode,
  type DOMExportOutput,
  type ElementFormatType,
  type LexicalEditor,
  type RangeSelection,
  type SerializedElementNode,
  setNodeIndentFromDOM,
  type Spread,
} from 'lexical'

export const SMALL_BODY_DOM_CLASS = PAYLOAD_RICHTEXT_SMALL_BODY_CLASS

export type SerializedSmallBodyNode = Spread<
  {
    type: 'small-body'
    version: 1
  },
  SerializedElementNode
>

export class SmallBodyNode extends ElementNode {
  static getType(): string {
    return 'small-body'
  }

  static clone(node: SmallBodyNode): SmallBodyNode {
    return new SmallBodyNode(node.__key)
  }

  createDOM(): HTMLElement {
    const dom = document.createElement('p')
    dom.classList.add(SMALL_BODY_DOM_CLASS)
    return dom
  }

  updateDOM(): boolean {
    return false
  }

  static importDOM() {
    return {
      p: (domNode: Node) => {
        if (!isHTMLElement(domNode)) return null
        if (!domNode.classList.contains(SMALL_BODY_DOM_CLASS)) return null
        return {
          conversion: (element: HTMLElement) => {
            const node = $createSmallBodyNode()
            if (element.style) {
              node.setFormat(element.style.textAlign as ElementFormatType)
              setNodeIndentFromDOM(element, node)
            }
            return { node }
          },
          priority: 2 as const,
        }
      },
    }
  }

  exportDOM(editor: LexicalEditor): DOMExportOutput {
    const { element } = super.exportDOM(editor)
    if (isHTMLElement(element)) {
      if (this.isEmpty()) {
        element.append(document.createElement('br'))
      }
      const formatType = this.getFormatType()
      if (formatType) {
        element.style.textAlign = formatType
      }
      const direction = this.getDirection()
      if (direction) {
        element.dir = direction
      }
    }
    return { element }
  }

  static importJSON(serializedNode: SerializedSmallBodyNode): SmallBodyNode {
    return $createSmallBodyNode().updateFromJSON(serializedNode)
  }

  exportJSON(): SerializedSmallBodyNode {
    return {
      ...super.exportJSON(),
      type: 'small-body',
      version: 1,
    }
  }

  insertNewAfter(_rangeSelection: RangeSelection | null, restoreSelection?: boolean): ElementNode {
    const newBlock = $createParagraphNode()
    const direction = this.getDirection()
    newBlock.setDirection(direction)
    this.insertAfter(newBlock, restoreSelection)
    return newBlock
  }

  collapseAtStart(): boolean {
    const paragraph = $createParagraphNode()
    const children = this.getChildren()
    children.forEach((child) => paragraph.append(child))
    this.replace(paragraph)
    return true
  }

  canMergeWhenEmpty(): boolean {
    return true
  }
}

export function $createSmallBodyNode(): SmallBodyNode {
  return $applyNodeReplacement(new SmallBodyNode())
}

export function $isSmallBodyNode(node: unknown): node is SmallBodyNode {
  return node instanceof SmallBodyNode
}
