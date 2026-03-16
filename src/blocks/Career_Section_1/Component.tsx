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

export type CareerSection1BlockProps = React.ComponentPropsWithoutRef<'section'> & Partial<Props>

function hasRichTextContent(data: DefaultTypedEditorState | null | undefined): boolean {
  if (!data || typeof data !== 'object') return false
  const root = (data as { root?: { children?: unknown[] } }).root
  return Boolean(root?.children?.length)
}

function hasValidJobLink(job: JobProps): boolean {
  const link = job?.link
  if (!link) return false
  if (link.type === 'reference' && link.reference != null) {
    const ref = link.reference as { value?: unknown }
    return ref?.value != null
  }
  return link.type === 'custom' && Boolean(link.url)
}

export const CareerSection1Block: React.FC<CareerSection1BlockProps> = (props) => {
  const {
    content,
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
    ...CareerSection1Defaults,
    ...props,
  }

  const contentId = React.useId()
  const uniqueId = `career1-${contentId}`

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
        .career1-dept-title,
        .career1-job-content {
          ${containerRules.join('\n          ')}
        }
      `)
    }
    if (textColor) {
      styles.push(`
        #${uniqueId},
        #${uniqueId} p, #${uniqueId} h1, #${uniqueId} h2, #${uniqueId} h3, #${uniqueId} h4, #${uniqueId} h5, #${uniqueId} h6,
        #${uniqueId} span:not(strong):not(b), #${uniqueId} a,
        .career1-dept-title,
        .career1-dept-title p, .career1-dept-title h1, .career1-dept-title h2, .career1-dept-title h3,
        .career1-dept-title h4, .career1-dept-title h5, .career1-dept-title h6,
        .career1-dept-title span:not(strong):not(b), .career1-dept-title a,
        .career1-job-content,
        .career1-job-content p, .career1-job-content h1, .career1-job-content h2, .career1-job-content h3,
        .career1-job-content h4, .career1-job-content h5, .career1-job-content h6,
        .career1-job-content span:not(strong):not(b), .career1-job-content a {
          color: ${textColor} !important;
        }
      `)
    }
    if (boldTextColor) {
      styles.push(`
        #${uniqueId} strong, #${uniqueId} b,
        .career1-dept-title strong, .career1-dept-title b,
        .career1-dept-title h1, .career1-dept-title h2, .career1-dept-title h3,
        .career1-dept-title h4, .career1-dept-title h5, .career1-dept-title h6,
        .career1-job-content strong, .career1-job-content b,
        .career1-job-content h1, .career1-job-content h2, .career1-job-content h3,
        .career1-job-content h4, .career1-job-content h5, .career1-job-content h6 {
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
      <div className="container max-w-lg">
        <div className="mb-12 text-center md:mb-18 lg:mb-20" id={uniqueId}>
          {content && hasRichTextContent(content) ? (
            <div className="[&_.RichText]:text-5xl [&_.RichText]:font-bold md:[&_.RichText]:text-7xl lg:[&_.RichText]:text-8xl [&_.RichText_.RichText]:text-base [&_.RichText_.RichText]:font-normal">
              <RichText data={content} />
            </div>
          ) : null}
        </div>
        <Accordion type="multiple">
          {jobDepartments?.map((jobDepartment, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="first:border-t-0">
              <AccordionTrigger className="text-2xl md:py-5 md:text-3xl md:leading-[1.3] lg:text-4xl">
                {jobDepartment.title && hasRichTextContent(jobDepartment.title) ? (
                  <div className="career1-dept-title text-left [&_.RichText]:text-2xl md:[&_.RichText]:text-3xl lg:[&_.RichText]:text-4xl">
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
                      <div className="mb-5 min-w-0 flex-1 sm:mb-0">
                        {job.jobContent && hasRichTextContent(job.jobContent) ? (
                          <div className="career1-job-content [&_.RichText]:text-xl [&_.RichText]:font-bold md:[&_.RichText]:text-2xl [&_.RichText_.RichText]:text-base [&_.RichText_.RichText]:font-normal">
                            <RichText data={job.jobContent} />
                          </div>
                        ) : null}
                      </div>
                      <div className="shrink-0 sm:ml-4">
                        {hasValidJobLink(job) ? (
                          <CMSLink
                            {...(job.link as React.ComponentProps<typeof CMSLink>)}
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
    </section>
  )
}

const job: JobProps = {
  jobContent: undefined,
  link: { type: 'custom', url: '#' },
  button: { title: 'Apply Now', variant: 'secondary', size: 'sm' },
}

export const CareerSection1Defaults: Props = {
  content: undefined,
  jobDepartments: [
    { title: undefined, jobs: [job, job, job] },
    { title: undefined, jobs: [job, job, job] },
    { title: undefined, jobs: [job, job, job] },
  ],
}
