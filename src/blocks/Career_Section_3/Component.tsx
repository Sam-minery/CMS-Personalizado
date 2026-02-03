'use client'

import React from 'react'
import {
  Button,
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@relume_io/relume-ui'
import RichText from '@/components/RichText'
import type { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'
import type { Media, Page, Post } from '@/payload-types'
import { CMSLink } from '@/components/Link'
import { getMediaUrl } from '@/utilities/getMediaUrl'
import { useGoogleFont } from '@/utilities/useGoogleFont'

type FontFile = {
  id: string | number
  url: string
  filename?: string
  name?: string
}

type JobLink = {
  type?: 'reference' | 'custom' | null
  newTab?: boolean | null
  reference?: { relationTo?: 'pages' | 'posts'; value?: Page | Post | number } | null
  url?: string | null
}

type JobProps = {
  jobContent?: DefaultTypedEditorState | null
  type?: 'reference' | 'custom' | null
  newTab?: boolean | null
  reference?: { relationTo?: 'pages' | 'posts'; value?: Page | Post | number } | null
  url?: string | null
  buttonTitle?: string | null
  variant?: string | null
  size?: string | null
}

type JobDepartmentProps = {
  title?: DefaultTypedEditorState | null
  jobs?: JobProps[] | null
}

type Props = {
  tagline?: string | null
  content?: DefaultTypedEditorState | null
  depts3?: JobDepartmentProps[] | null
  backgroundColor?: string
  textColor?: string
  boldTextColor?: string
  buttonBackgroundColor?: string
  buttonTextColor?: string
  fontFamily?: string
  useCustomFont?: boolean
  customFontFile?: FontFile
  customFontName?: string
}

export type Career3Props = React.ComponentPropsWithoutRef<'section'> & Partial<Props>

function hasRichTextContent(data: DefaultTypedEditorState | null | undefined): boolean {
  if (!data || typeof data !== 'object') return false
  const root = (data as { root?: { children?: unknown[] } }).root
  return Boolean(root?.children?.length)
}

export const Career3: React.FC<Career3Props> = (props) => {
  const {
    tagline,
    content,
    depts3,
    backgroundColor,
    textColor,
    boldTextColor,
    buttonBackgroundColor,
    buttonTextColor,
    fontFamily,
    useCustomFont,
    customFontFile,
    customFontName,
  } = {
    ...Career3Defaults,
    ...props,
  }

  const contentId = React.useId()
  const uniqueId = `career3-${contentId}`

  const getFontFamily = () => {
    if (useCustomFont && customFontName) return `"${customFontName}"`
    if (fontFamily && fontFamily !== 'default') return fontFamily
    return undefined
  }
  const selectedFontFamily = getFontFamily()
  useGoogleFont(selectedFontFamily)

  const fontFileUrl = customFontFile?.url ? getMediaUrl(customFontFile.url).replace(/([^:]\/)\/+/g, '$1') : null
  const isValidFontFile =
    fontFileUrl && customFontFile?.filename && /\.(woff|woff2|ttf|otf)$/i.test(customFontFile.filename)

  const buildStyles = () => {
    const styles: string[] = []
    if (useCustomFont && fontFileUrl && customFontName && isValidFontFile) {
      styles.push(`
        @font-face {
          font-family: "${customFontName.replace(/"/g, '\\"')}";
          src: url("${fontFileUrl}") format("woff2"), url("${fontFileUrl}") format("woff");
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }
      `)
    }
    const containerRules: string[] = []
    if (useCustomFont && customFontName && isValidFontFile) {
      containerRules.push(`font-family: "${customFontName.replace(/"/g, '\\"')}" !important;`)
    } else if (selectedFontFamily && !useCustomFont) {
      containerRules.push(`font-family: ${selectedFontFamily} !important;`)
    }
    if (containerRules.length > 0) {
      styles.push(`
        #${uniqueId},
        .career3-dept-title,
        .career3-job-content {
          ${containerRules.join('\n          ')}
        }
      `)
    }
    if (textColor) {
      styles.push(`
        #${uniqueId},
        #${uniqueId} p, #${uniqueId} h1, #${uniqueId} h2, #${uniqueId} h3, #${uniqueId} h4, #${uniqueId} h5, #${uniqueId} h6,
        #${uniqueId} span:not(strong):not(b), #${uniqueId} a,
        .career3-dept-title,
        .career3-dept-title p, .career3-dept-title h1, .career3-dept-title h2, .career3-dept-title h3,
        .career3-dept-title h4, .career3-dept-title h5, .career3-dept-title h6,
        .career3-dept-title span:not(strong):not(b), .career3-dept-title a,
        .career3-job-content,
        .career3-job-content p, .career3-job-content h1, .career3-job-content h2, .career3-job-content h3,
        .career3-job-content h4, .career3-job-content h5, .career3-job-content h6,
        .career3-job-content span:not(strong):not(b), .career3-job-content a {
          color: ${textColor} !important;
        }
      `)
    }
    if (boldTextColor) {
      styles.push(`
        #${uniqueId} strong, #${uniqueId} b,
        .career3-dept-title strong, .career3-dept-title b,
        .career3-dept-title h1, .career3-dept-title h2, .career3-dept-title h3,
        .career3-dept-title h4, .career3-dept-title h5, .career3-dept-title h6,
        .career3-job-content strong, .career3-job-content b,
        .career3-job-content h1, .career3-job-content h2, .career3-job-content h3,
        .career3-job-content h4, .career3-job-content h5, .career3-job-content h6 {
          color: ${boldTextColor} !important;
        }
      `)
    }
    return styles.length > 0 ? styles.join('\n') : ''
  }

  const combinedStyles = buildStyles()

  const hasValidJobLink = (job: JobProps) => {
    if (job.type === 'reference' && job.reference != null) {
      const ref = job.reference as { value?: Page | Post | number }
      return ref?.value != null
    }
    return job.type === 'custom' && job.url
  }

  return (
    <section
      className="px-[5%] py-16 md:py-24 lg:py-28"
      style={backgroundColor ? { backgroundColor } : undefined}
    >
      {combinedStyles && <style>{combinedStyles}</style>}
      <div className="container">
        <div className="grid gap-x-12 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-[0.75fr_1fr] lg:gap-x-20">
          <div className="max-w-lg" id={uniqueId}>
            {tagline ? <p className="mb-3 font-semibold md:mb-4">{tagline}</p> : null}
            {content && hasRichTextContent(content) ? (
              <div className="mb-5 md:mb-6 [&_.RichText]:text-5xl [&_.RichText]:font-bold md:[&_.RichText]:text-7xl lg:[&_.RichText]:text-8xl [&_.RichText_.RichText]:text-base [&_.RichText_.RichText]:font-normal">
                <RichText data={content} />
              </div>
            ) : null}
          </div>
          <div className="space-y-4">
            <Accordion type="multiple">
              {depts3?.map((jobDepartment, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="first:border-t-0">
                  <AccordionTrigger className="text-2xl md:py-5 md:text-3xl md:leading-[1.3] lg:text-4xl">
                    {jobDepartment.title && hasRichTextContent(jobDepartment.title) ? (
                      <div className="career3-dept-title text-left [&_.RichText]:text-2xl md:[&_.RichText]:text-3xl lg:[&_.RichText]:text-4xl">
                        <RichText data={jobDepartment.title} />
                      </div>
                    ) : (
                      'Job Department'
                    )}
                  </AccordionTrigger>
                  <AccordionContent className="mb-6 pb-0 md:mb-8">
                    {jobDepartment.jobs?.map((job, jobIndex) => (
                      <div key={jobIndex} className="py-6 md:py-8">
                        <div className="mb-5 sm:flex sm:items-start sm:justify-between md:mb-6">
                          <div className="mb-5 sm:mb-0 min-w-0 flex-1">
                            {job.jobContent && hasRichTextContent(job.jobContent) ? (
                              <div className="career3-job-content [&_.RichText]:text-xl [&_.RichText]:font-bold md:[&_.RichText]:text-2xl [&_.RichText_.RichText]:text-base [&_.RichText_.RichText]:font-normal">
                                <RichText data={job.jobContent} />
                              </div>
                            ) : null}
                          </div>
                          <div className="shrink-0 sm:ml-4">
                            {hasValidJobLink(job) && (job.buttonTitle || job.url || job.reference) ? (
                              <CMSLink
                                type={job.type ?? undefined}
                                newTab={job.newTab ?? undefined}
                                url={job.url ?? undefined}
                                reference={
                                  job.reference != null &&
                                  typeof job.reference === 'object' &&
                                  'relationTo' in job.reference &&
                                  'value' in job.reference &&
                                  job.reference.value != null
                                    ? {
                                        relationTo: job.reference.relationTo as 'pages' | 'posts',
                                        value: job.reference.value,
                                      }
                                    : undefined
                                }
                                label={job.buttonTitle ?? 'Apply Now'}
                                appearance={(job.variant as 'default' | 'secondary' | 'outline' | 'ghost') ?? 'secondary'}
                                size={
                                  (job.size === 'md' ? 'default' : (job.size ?? 'sm')) as
                                    'clear' | 'sm' | 'default' | 'icon' | 'lg'
                                }
                                style={{
                                  ...(buttonBackgroundColor && { backgroundColor: buttonBackgroundColor }),
                                  ...(buttonTextColor && { color: buttonTextColor }),
                                }}
                              />
                            ) : null}
                          </div>
                        </div>
                      </div>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}

const job: JobProps = {
  jobContent: undefined,
  type: 'custom',
  url: '#',
  buttonTitle: 'Apply Now',
  variant: 'secondary',
  size: 'sm',
}

export const Career3Defaults: Props = {
  tagline: 'Tagline',
  content: undefined,
  depts3: [
    { title: undefined, jobs: [job, job, job] },
    { title: undefined, jobs: [job, job, job] },
    { title: undefined, jobs: [job, job, job] },
  ],
}
