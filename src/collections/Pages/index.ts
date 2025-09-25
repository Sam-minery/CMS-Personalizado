import type { CollectionConfig } from 'payload'

import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'
import { Archive } from '../../blocks/ArchiveBlock/config'
import { Banner1Block } from '../../blocks/Banner1/config'
import { Banner4 } from '../../blocks/Banner_4/config'
import { Banner9 } from '../../blocks/Banner_9/config'
import { Contact1Block } from '../../blocks/Contact1/config'
import { Contact5Block } from '../../blocks/Contact5/config'
import { CTA1Block } from '../../blocks/CTA1/config'
import { CTA5Block } from '../../blocks/CTA5/config'
import { FAQ1Block } from '../../blocks/FAQ1/config'
import { FAQ5Block } from '../../blocks/FAQ5/config'
import { Footer1Block } from '../../blocks/Footer1/config'
import { Footer5Block } from '../../blocks/Footer5/config'
import { Blog1 } from '../../blocks/Blog_1/config'
import { Blog5 } from '../../blocks/Blog_5/config'
import { BlogPostHeader1 } from '../../blocks/Blog_Post_Header_1/config'
import { BlogPostHeader5 } from '../../blocks/Blog_Post_Header_5/config'
import { CallToAction } from '../../blocks/CallToAction/config'
import { CareerSection1 } from '../../blocks/Career_Section_1/config'
import { Content } from '../../blocks/Content/config'
import { CTA_custom_2 } from '../../blocks/CTA_custom_2/config'
import { FormBlock } from '../../blocks/Form/config'
import { Form_custom_2 } from '../../blocks/Multi-step_form_1/config'
import { Gallery6 } from '../../blocks/Gallery_6/config'
import { Gallery19 } from '../../blocks/Gallery_19/config'
import { Gallery27 } from '../../blocks/Gallery_27/config'
import { Logo1 } from '../../blocks/Logo_1/config'
import { Logo2 } from '../../blocks/Logo_2/config'
import { LongContent1 } from '../../blocks/Long_Content_1/config'
import { MediaBlock } from '../../blocks/MediaBlock/config'
import { Pricing5 } from '../../blocks/Pricing_5/config'
import { Team1 } from '../../blocks/Team1/config'
import { Team2 } from '../../blocks/Team2/config'
import { Testimonial3Block } from '../../blocks/Testimonial_3/config'
import { Testimonial6Block } from '../../blocks/Testimonial_6/config'
import { Timeline1 } from '../../blocks/Timeline_1/config'
import { Portfolio1 } from '../../blocks/Portfolio_1/config'
import { Portfolio5 } from '../../blocks/Portfolio_5/config'
import { PortfolioHeader1 } from '../../blocks/Portfolio_Header_1/config'
import { PortfolioHeader2 } from '../../blocks/Portfolio_Header_2/config'
import { EventItemHeader1 } from '../../blocks/Event_Item_Header_1/config'
import { EventItemHeader5 } from '../../blocks/Event_Item_Header_5/config'
import { EventHeader1 } from '../../blocks/Event_Header_1/config'
import { EventHeader3 } from '../../blocks/Event_Header_3/config'
import { Event1 } from '../../blocks/Event_1/config'
import { Event3 } from '../../blocks/Event_3/config'
import { Stats1 } from '../../blocks/Stats_1/config'
import { Stats3 } from '../../blocks/Stats_3/config'
import { Comparison1 } from '../../blocks/Comparison_1/config'
import { Comparison13 } from '../../blocks/Comparison_13/config'
import { Links1 } from '../../blocks/Links_1/config'
import { Links4 } from '../../blocks/Links_4/config'
import { FAQ2 } from '../../blocks/FAQ_2/config'
import { FAQ4 } from '../../blocks/FAQ_4/config'
import { Navbar1Block } from '../../blocks/Navbar1/config'
import { Pricing1Block } from '../../blocks/Pricing1/config'
import { Testimonial1Block } from '../../blocks/Testimonial1/config'
import { Testimonial5Block } from '../../blocks/Testimonial5/config'
import { Navbar5Block } from '../../blocks/Navbar5/config'
import { Layout1Block } from '../../blocks/Layout1/config'
import { Layout5Block } from '../../blocks/Layout5/config'
import { Header44Block } from '../../blocks/Header44/config'
import { Header48Block } from '../../blocks/Header48/config'
import { hero } from '@/heros/config'
import { slugField } from '@/fields/slug'
import { populatePublishedAt } from '../../hooks/populatePublishedAt'
import { generatePreviewPath } from '../../utilities/generatePreviewPath'
import { revalidateDelete, revalidatePage } from './hooks/revalidatePage'

import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'

export const Pages: CollectionConfig<'pages'> = {
  slug: 'pages',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  // This config controls what's populated by default when a page is referenced
  // https://payloadcms.com/docs/queries/select#defaultpopulate-collection-config-property
  // Type safe if the collection slug generic is passed to `CollectionConfig` - `CollectionConfig<'pages'>
  defaultPopulate: {
    title: true,
    slug: true,
  },
  admin: {
    defaultColumns: ['title', 'slug', 'updatedAt'],
    livePreview: {
      url: ({ data, req }) => {
        const path = generatePreviewPath({
          slug: typeof data?.slug === 'string' ? data.slug : '',
          collection: 'pages',
          req,
        })

        return path
      },
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: typeof data?.slug === 'string' ? data.slug : '',
        collection: 'pages',
        req,
      }),
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      type: 'tabs',
      tabs: [
        {
          fields: [hero],
          label: 'Hero',
        },
        {
          fields: [
            {
              name: 'layout',
              type: 'blocks',
              blocks: [Archive, Banner1Block, Banner4, Banner9, Blog1, Blog5, BlogPostHeader1, BlogPostHeader5, CallToAction, CareerSection1, Comparison1, Comparison13, Contact1Block, Contact5Block, Content, CTA1Block, CTA5Block, CTA_custom_2, Event1, Event3, EventHeader1, EventHeader3, EventItemHeader1, EventItemHeader5, FAQ1Block, FAQ2, FAQ4, FAQ5Block, Footer1Block, Footer5Block, FormBlock, Form_custom_2, Gallery6, Gallery19, Gallery27, Header44Block, Header48Block, Layout1Block, Layout5Block, Links1, Links4, Logo1, Logo2, LongContent1, MediaBlock, Navbar1Block, Navbar5Block, Portfolio1, Portfolio5, PortfolioHeader1, PortfolioHeader2, Pricing1Block, Pricing5, Stats1, Stats3, Team1, Team2, Testimonial1Block, Testimonial3Block, Testimonial5Block, Testimonial6Block, Timeline1],
              required: true,
              admin: {
                initCollapsed: true,
              },
            },
          ],
          label: 'Content',
        },
        {
          name: 'meta',
          label: 'SEO',
          fields: [
            OverviewField({
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
              imagePath: 'meta.image',
            }),
            MetaTitleField({
              hasGenerateFn: true,
            }),
            MetaImageField({
              relationTo: 'media',
            }),

            MetaDescriptionField({}),
            PreviewField({
              // if the `generateUrl` function is configured
              hasGenerateFn: true,

              // field paths to match the target field for data
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
            }),
          ],
        },
      ],
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
    ...slugField(),
  ],
  hooks: {
    afterChange: [revalidatePage],
    beforeChange: [populatePublishedAt],
    afterDelete: [revalidateDelete],
  },
  versions: {
    drafts: {
      autosave: {
        interval: 100, // We set this interval for optimal live preview
      },
      schedulePublish: true,
    },
    maxPerDoc: 50,
  },
}
