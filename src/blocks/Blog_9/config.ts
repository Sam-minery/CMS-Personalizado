import type { Block } from 'payload'
import type { Media } from '@/payload-types'

export type Blog9BlockType = {
  tagline: string
  heading: string
  description: string
  featuredBlogIitle: string
  featuredBlogPost: {
    url: string
    image: string | Media
    category: string
    title: string
    description: string
    avatar: string | Media
    fullName: string
    date: string
    readTime: string
  }
  smallFeaturedBlogPosts: Array<{
    url: string
    image: string | Media
    category: string
    title: string
    avatar: string | Media
    fullName: string
    date: string
    readTime: string
  }>
  latestBlogTitle: string
  blogPosts: Array<{
    url: string
    image: string | Media
    category: string
    title: string
    description: string
    avatar: string | Media
    fullName: string
    date: string
    readTime: string
  }>
}

export const Blog9: Block = {
  slug: 'blog9',
  interfaceName: 'Blog9BlockType',
  labels: {
    singular: 'Blog 9',
    plural: 'Blog 9 Blocks',
  },
  fields: [
    {
      name: 'tagline',
      type: 'text',
      label: 'Tagline',
      defaultValue: 'Blog',
    },
    {
      name: 'heading',
      type: 'text',
      label: 'Heading',
      defaultValue: 'Short heading goes here',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      name: 'featuredBlogIitle',
      type: 'text',
      label: 'Featured Blog Title',
      defaultValue: 'Featured blog posts',
    },
    {
      name: 'featuredBlogPost',
      type: 'group',
      label: 'Featured Blog Post',
      fields: [
        {
          name: 'url',
          type: 'text',
          label: 'Post URL',
          required: true,
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Post Image',
          required: true,
        },
        {
          name: 'category',
          type: 'text',
          label: 'Category',
          required: true,
        },
        {
          name: 'title',
          type: 'text',
          label: 'Post Title',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Post Description',
          required: true,
        },
        {
          name: 'avatar',
          type: 'upload',
          relationTo: 'media',
          label: 'Author Avatar',
          required: true,
        },
        {
          name: 'fullName',
          type: 'text',
          label: 'Author Full Name',
          required: true,
        },
        {
          name: 'date',
          type: 'text',
          label: 'Publication Date',
          required: true,
        },
        {
          name: 'readTime',
          type: 'text',
          label: 'Read Time',
          required: true,
        },
      ],
    },
    {
      name: 'smallFeaturedBlogPosts',
      type: 'array',
      label: 'Small Featured Blog Posts',
      minRows: 1,
      maxRows: 10,
      fields: [
        {
          name: 'url',
          type: 'text',
          label: 'Post URL',
          required: true,
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Post Image',
          required: true,
        },
        {
          name: 'category',
          type: 'text',
          label: 'Category',
          required: true,
        },
        {
          name: 'title',
          type: 'text',
          label: 'Post Title',
          required: true,
        },
        {
          name: 'avatar',
          type: 'upload',
          relationTo: 'media',
          label: 'Author Avatar',
          required: true,
        },
        {
          name: 'fullName',
          type: 'text',
          label: 'Author Full Name',
          required: true,
        },
        {
          name: 'date',
          type: 'text',
          label: 'Publication Date',
          required: true,
        },
        {
          name: 'readTime',
          type: 'text',
          label: 'Read Time',
          required: true,
        },
      ],
    },
    {
      name: 'latestBlogTitle',
      type: 'text',
      label: 'Latest Blog Title',
      defaultValue: 'Latest blog posts',
    },
    {
      name: 'blogPosts',
      type: 'array',
      label: 'Blog Posts',
      minRows: 1,
      maxRows: 20,
      fields: [
        {
          name: 'url',
          type: 'text',
          label: 'Post URL',
          required: true,
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Post Image',
          required: true,
        },
        {
          name: 'category',
          type: 'text',
          label: 'Category',
          required: true,
        },
        {
          name: 'title',
          type: 'text',
          label: 'Post Title',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Post Description',
          required: true,
        },
        {
          name: 'avatar',
          type: 'upload',
          relationTo: 'media',
          label: 'Author Avatar',
          required: true,
        },
        {
          name: 'fullName',
          type: 'text',
          label: 'Author Full Name',
          required: true,
        },
        {
          name: 'date',
          type: 'text',
          label: 'Publication Date',
          required: true,
        },
        {
          name: 'readTime',
          type: 'text',
          label: 'Read Time',
          required: true,
        },
      ],
    },
  ],
}
