'use client'

import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@relume_io/relume-ui'
import RichText from '@/components/RichText'
import type { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'
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
  reference?: { relationTo?: 'pages' | 'posts'; value?: unknown } | null
  url?: string | null
}

type JobProps = {
  jobContent?: DefaultTypedEditorState | null
  link?: JobLink | null
  button?: {
    title?: string | null
    variant?: string | null
    size?: string | null
  } | null
}

type JobDepartmentProps = {
  title?: DefaultTypedEditorState | null
  jobs: JobProps[]
}

type Props = {
  content?: DefaultTypedEditorState | null
  sectionTitle?: string | null
  jobDepartments: JobDepartmentProps[]
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

export type Career5BlockProps = React.ComponentPropsWithoutRef<'section'> & Partial<Props>

function hasRichTextContent(data: DefaultTypedEditorState | null | undefined): boolean {
  if (!data || typeof data !== 'object') return false
  const root = (data as { root?: { children?: unknown[] } }).root
  return Boolean(root?.children?.length)
}

function getJobLink(job: JobProps): JobLink | null {
  const link = job?.link
  if (link) return link
  const flat = job as unknown as { type?: string; newTab?: boolean; reference?: { value?: unknown }; url?: string }
  if (flat?.type === 'reference' && flat.reference != null) {
    const ref = flat.reference as { value?: unknown }
    if (ref?.value != null) return { type: 'reference', newTab: flat.newTab ?? null, reference: flat.reference as JobLink['reference'], url: null }
  }
  if (flat?.type === 'custom' && flat.url) return { type: 'custom', newTab: flat.newTab ?? null, reference: null, url: flat.url }
  return null
}

export const Career5Block: React.FC<Career5BlockProps> = (props) => {
  const {
    content,
    sectionTitle,
    jobDepartments,
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
    ...Career5Defaults,
    ...props,
  }

  const contentId = React.useId()
  const uniqueId = `career5-${contentId}`

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
        .career5-section-title,
        .career5-dept-title,
        .career5-job-content {
          ${containerRules.join('\n          ')}
        }
      `)
    }
    if (textColor) {
      styles.push(`
        #${uniqueId},
        #${uniqueId} p, #${uniqueId} h1, #${uniqueId} h2, #${uniqueId} h3, #${uniqueId} h4, #${uniqueId} h5, #${uniqueId} h6,
        #${uniqueId} span:not(strong):not(b), #${uniqueId} a,
        .career5-section-title,
        .career5-dept-title,
        .career5-dept-title p, .career5-dept-title h1, .career5-dept-title h2, .career5-dept-title h3,
        .career5-dept-title h4, .career5-dept-title h5, .career5-dept-title h6,
        .career5-dept-title span:not(strong):not(b), .career5-dept-title a,
        .career5-job-content,
        .career5-job-content p, .career5-job-content h1, .career5-job-content h2, .career5-job-content h3,
        .career5-job-content h4, .career5-job-content h5, .career5-job-content h6,
        .career5-job-content span:not(strong):not(b), .career5-job-content a {
          color: ${textColor} !important;
        }
      `)
    }
    if (boldTextColor) {
      styles.push(`
        #${uniqueId} strong, #${uniqueId} b,
        .career5-section-title,
        .career5-dept-title strong, .career5-dept-title b,
        .career5-dept-title h1, .career5-dept-title h2, .career5-dept-title h3,
        .career5-dept-title h4, .career5-dept-title h5, .career5-dept-title h6,
        .career5-job-content strong, .career5-job-content b,
        .career5-job-content h1, .career5-job-content h2, .career5-job-content h3,
        .career5-job-content h4, .career5-job-content h5, .career5-job-content h6 {
          color: ${boldTextColor} !important;
        }
      `)
    }
    return styles.length > 0 ? styles.join('\n') : ''
  }

  const combinedStyles = buildStyles()

  return (
    <section
      id="relume"
      className="px-[5%] py-16 md:py-24 lg:py-28"
      style={backgroundColor ? { backgroundColor } : undefined}
    >
      {combinedStyles ? <style>{combinedStyles}</style> : null}
      <div className="container">
        <div className="mb-12 w-full md:mb-18 lg:mb-20" id={uniqueId}>
          {content && hasRichTextContent(content) ? (
            <div className="[&_.RichText]:text-5xl [&_.RichText]:font-bold md:[&_.RichText]:text-7xl lg:[&_.RichText]:text-8xl [&_.RichText_.RichText]:text-base [&_.RichText_.RichText]:font-normal">
              <RichText data={content} />
            </div>
          ) : null}
        </div>
        <Accordion type="multiple">
          <div className="border-b border-border-primary py-6 md:py-8">
            <h3 className="career5-section-title text-2xl font-bold md:text-3xl md:leading-[1.3] lg:text-4xl">
              {sectionTitle ?? 'Job Department'}
            </h3>
          </div>
          {jobDepartments?.map((jobDepartment, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="first:border-t-0">
              <AccordionTrigger className="text-2xl md:py-5 md:text-3xl md:leading-[1.3] lg:text-4xl">
                {jobDepartment.title && hasRichTextContent(jobDepartment.title) ? (
                  <div className="career5-dept-title text-left [&_.RichText]:text-2xl md:[&_.RichText]:text-3xl lg:[&_.RichText]:text-4xl">
                    <RichText data={jobDepartment.title} />
                  </div>
                ) : (
                  'Job Department'
                )}
              </AccordionTrigger>
              <AccordionContent className="mb-6 flex flex-col gap-6 pb-0 md:mb-8 md:gap-8">
                {jobDepartment.jobs?.map((job, jobIndex) => (
                  <div key={jobIndex} className="border border-border-primary p-6 md:p-8">
                    <div className="mb-5 sm:flex sm:items-start sm:justify-between md:mb-6">
                      <div className="mb-5 min-w-0 flex-1 sm:mb-0">
                        {job.jobContent && hasRichTextContent(job.jobContent) ? (
                          <div className="career5-job-content [&_.RichText]:text-xl [&_.RichText]:font-bold md:[&_.RichText]:text-2xl [&_.RichText_.RichText]:text-base [&_.RichText_.RichText]:font-normal">
                            <RichText data={job.jobContent} />
                          </div>
                        ) : null}
                      </div>
                      <div className="shrink-0 sm:ml-4">
                        <CMSLink
                          {...(getJobLink(job) ?? { type: 'custom', url: '#' }) as React.ComponentProps<typeof CMSLink>}
                          label={job.button?.title ?? 'Apply Now'}
                          appearance={
                            (job.button?.variant as React.ComponentProps<typeof CMSLink>['appearance']) ?? 'secondary'
                          }
                          size={
                            (job.button?.size === 'default'
                              ? 'default'
                              : (job.button?.size ?? 'sm')) as 'sm' | 'default' | 'lg'
                          }
                          style={{
                            ...(buttonBackgroundColor && { backgroundColor: buttonBackgroundColor }),
                            ...(buttonTextColor && { color: buttonTextColor }),
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

const job: JobProps = {
  jobContent: undefined,
  link: { type: 'custom', url: '#' },
  button: { title: 'Apply Now', variant: 'secondary', size: 'sm' },
}

export const Career5Defaults: Props = {
  content: undefined,
  sectionTitle: 'Job Department',
  jobDepartments: [
    { title: undefined, jobs: [job, job, job] },
    { title: undefined, jobs: [job, job, job] },
  ],
}
