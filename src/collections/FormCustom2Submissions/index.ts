import type { CollectionConfig } from 'payload'

import { authenticated } from '../../access/authenticated'

export const FormCustom2Submissions: CollectionConfig = {
  slug: 'form-custom-2-submissions',
  access: {
    create: () => true, // Permitir creación pública para el formulario
    delete: authenticated,
    read: authenticated,
    update: authenticated,
  },
  admin: {
    defaultColumns: ['name', 'email', 'companyName', 'serviceType', 'source', 'createdAt'],
    useAsTitle: 'name',
    group: 'Content',
    description: 'Envíos de formularios multi-paso (formulario 1 y 2)',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Nombre',
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
      name: 'serviceType',
      type: 'text',
      label: 'Tipo de servicio',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'budget',
      type: 'text',
      label: 'Presupuesto',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'aboutProject',
      type: 'textarea',
      label: 'Sobre el proyecto',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'companyName',
      type: 'text',
      label: 'Nombre de la empresa',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'employees',
      type: 'text',
      label: 'Número de empleados',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'website',
      type: 'text',
      label: 'Sitio web',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'country',
      type: 'text',
      label: 'País',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'date',
      type: 'text',
      label: 'Fecha',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'source',
      type: 'select',
      label: 'Fuente del formulario',
      options: [
        { label: 'Multi-step form 1', value: 'form-custom-2' },
        { label: 'Multi-step form 2', value: 'multi-form-2' },
        { label: 'Banner 1', value: 'banner1' },
        { label: 'Contact 1', value: 'contact1' },
        { label: 'Contact 5', value: 'contact5' },
      ],
      defaultValue: 'form-custom-2',
      admin: {
        position: 'sidebar',
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