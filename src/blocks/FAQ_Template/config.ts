import type { Block } from 'payload'

export const FAQTemplate: Block = {
  slug: 'faqTemplate',
  interfaceName: 'FAQTemplateBlock',
  fields: [
    {
      name: 'faqTemplateHeading',
      type: 'text',
      label: 'Heading',
      defaultValue: 'Frequently Asked Questions',
    },
    {
      name: 'questions',
      type: 'array',
      label: 'Preguntas',
      minRows: 1,
      defaultValue: [
        {
          question: 'What is Agenforce AI?',
          answers: [
            {
              text: 'Agenforce AI is a platform for building and managing AI agents.',
            },
          ],
        },
        {
          question: 'Who is Agenforce AI built for?',
          answers: [
            {
              text: 'Agenforce AI is a platform for building and managing AI agents.',
            },
          ],
        },
        {
          question: 'How does Agenforce AI work?',
          answers: [
            {
              text: 'Agenforce AI is a platform for building and managing AI agents.',
            },
          ],
        },
        {
          question: 'Is there a free trial available?',
          answers: [
            {
              text:
                'Yes, we offer a 14-day free trial so you can explore all features before committing to a plan.',
            },
          ],
        },
        {
          question: 'What kind of support do you provide?',
          answers: [
            {
              text:
                'We provide 24/7 customer support through chat, email, and comprehensive documentation to help you get the most out of Agenforce AI.',
            },
          ],
        },
      ],
      fields: [
        {
          name: 'question',
          type: 'text',
          label: 'Pregunta',
          required: true,
          defaultValue: 'Question?',
        },
        {
          name: 'answers',
          type: 'array',
          label: 'Respuestas',
          minRows: 1,
          required: true,
          defaultValue: [
            {
              text: 'Answer',
            },
          ],
          fields: [
            {
              name: 'text',
              type: 'textarea',
              label: 'Texto de la respuesta',
              required: true,
              defaultValue: 'Answer',
            },
          ],
        },
      ],
    },
  ],
  labels: {
    plural: 'FAQ Template',
    singular: 'FAQ Template',
  },
}

