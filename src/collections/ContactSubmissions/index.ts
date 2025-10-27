import type { CollectionConfig } from 'payload'

import { authenticated } from '../../access/authenticated'

export const ContactSubmissions: CollectionConfig = {
  slug: 'contact-submissions',
  access: {
    create: () => true, // Permitir creación pública para el formulario
    delete: authenticated,
    read: authenticated,
    update: authenticated,
  },
  admin: {
    defaultColumns: ['firstName', 'lastName', 'email', 'topic', 'createdAt'],
    useAsTitle: 'firstName',
    group: 'Content',
    description: 'Envíos del formulario de Contact Section 2',
  },
  fields: [
    {
      name: 'firstName',
      type: 'text',
      label: 'Nombre',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'lastName',
      type: 'text',
      label: 'Apellido',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'email',
      type: 'email',
      label: 'Email',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'phone',
      type: 'text',
      label: 'Teléfono',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'topic',
      type: 'text',
      label: 'Tema seleccionado',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'description',
      type: 'text',
      label: 'Descripción personal',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'message',
      type: 'textarea',
      label: 'Mensaje',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'acceptTerms',
      type: 'checkbox',
      label: 'Acepta términos',
      defaultValue: false,
      admin: {
        position: 'sidebar',
        description: 'Indica si el usuario aceptó los términos y condiciones',
      },
    },
    {
      name: 'source',
      type: 'text',
      label: 'Fuente del formulario',
      defaultValue: 'contact-section-2',
      admin: {
        position: 'sidebar',
        readOnly: true,
        description: 'Identifica de qué formulario proviene el envío',
      },
    },
    {
      name: 'status',
      type: 'select',
      label: 'Estado',
      defaultValue: 'new',
      options: [
        { label: 'Nuevo', value: 'new' },
        { label: 'En revisión', value: 'reviewing' },
        { label: 'Respondido', value: 'responded' },
        { label: 'Cerrado', value: 'closed' },
      ],
      admin: {
        position: 'sidebar',
        description: 'Estado del envío del formulario',
      },
    },
  ],
  timestamps: true,
} 