"use client"
import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { cn } from '@/utilities/ui'
import { Media } from '@/components/Media'
import type { Media as MediaType } from '@/payload-types'

type Feature = {
  title: string
  description: string
}

type Props = {
  features?: Feature[]
  galleryImages?: { image: MediaType }[]
  styleOneItems?: { icon?: MediaType; title: string; description: string; badgeText?: string }[]
  styleThreePills?: { text: string }[]
  styleFourItems?: { title: string; description: string; color?: 'blue' | 'green' | 'indigo' | 'neutral' | 'purple'; tags?: { text: string; icon?: MediaType }[] }[]
  showStyleOne?: boolean
  showStyleTwo?: boolean
  showStyleThree?: boolean
  showStyleFour?: boolean
}

export const FeaturesTertiary: React.FC<Props> = (props) => {
  const features = props.features?.slice(0, 4) || [
    { title: 'Audit Trail', description: 'Tracks every agent action with full input-output visibility and timestamps.' },
    { title: 'Role-Based Access', description: 'Controls who can launch, review, or manage agents based on roles.' },
    { title: 'Approval Queue', description: "Sends agent-generated content to human reviewers before it's published." },
    { title: 'Guardrail Engine', description: 'Applies brand, tone, and policy checks before output goes live.' },
  ]

  return (
    <section className="pt-10 md:pt-20 lg:py-32 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 border-y border-neutral-200 dark:border-neutral-800 divide-neutral-200 dark:divide-neutral-800">
          {props.showStyleOne !== false && (
            <div className="md:border-r border-b border-neutral-200 dark:border-neutral-800">
              <CardContent>
                <h2 className="text-lg font-bold text-neutral-800 dark:text-neutral-200">{features[0]?.title}</h2>
                <CardDescription>{features[0]?.description}</CardDescription>
              </CardContent>
              <CardSkeleton>
                <SkeletonOne items={props.styleOneItems} />
              </CardSkeleton>
            </div>
          )}
          {props.showStyleTwo !== false && (
            <div className="border-b border-neutral-200 dark:border-neutral-800">
              <CardContent>
                <h2 className="text-lg font-bold text-neutral-800 dark:text-neutral-200">{features[1]?.title}</h2>
                <CardDescription>{features[1]?.description}</CardDescription>
              </CardContent>
              <CardSkeleton className="mask-radial-from-20% ">
                <SkeletonTwo galleryImages={props.galleryImages} />
              </CardSkeleton>
            </div>
          )}
          {props.showStyleThree !== false && (
            <div className="md:border-r border-neutral-200 dark:border-neutral-800">
              <CardContent>
                <h2 className="text-lg font-bold text-neutral-800 dark:text-neutral-200">{features[2]?.title}</h2>
                <CardDescription>{features[2]?.description}</CardDescription>
              </CardContent>
              <CardSkeleton className="mask-radial-from-20%  mask-r-from-50%">
                <SkeletonThree pills={props.styleThreePills} />
              </CardSkeleton>
            </div>
          )}
          {props.showStyleFour !== false && (
            <div className=" dark:border-neutral-800">
              <CardContent>
                <h2 className="text-lg font-bold text-neutral-800 dark:text-neutral-200">{features[3]?.title}</h2>
                <CardDescription>{features[3]?.description}</CardDescription>
              </CardContent>
              <CardSkeleton className="">
                <SkeletonFour items={props.styleFourItems} />
              </CardSkeleton>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export const CardContent = ({ children }: { children: React.ReactNode }) => {
  return <div className="p-4 md:p-8">{children}</div>
}

export const CardDescription = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className="text-neutral-600 dark:text-neutral-400 mt-2 max-w-md text-balance">{children}</p>
  )
}

export const CardSkeleton = ({ className, children }: { className?: string; children?: React.ReactNode }) => {
  return (
    <div className={cn('relative h-80 sm:h-60 flex flex-col md:h-80 overflow-hidden perspective-distant', className)}>
      {children}
    </div>
  )
}

// Minimal, dependency-free versions of the four skeletons
const SkeletonOne: React.FC<{ items?: { icon?: MediaType; title: string; description: string; badgeText?: string }[] }> = ({ items }) => {
  const list: { icon?: MediaType; title: string; description: string; badgeText?: string }[] =
    items && items.length > 0
      ? items
      : new Array(7).fill(null).map((_, i) => ({
          title: `Item ${i + 1}`,
          description: 'Generated draft content',
        }))
  return (
    <div className="flex-1 rounded-t-3xl gap-2 flex flex-col bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 mx-auto w-full h-full absolute inset-x-10 inset-y-2 pt-2 px-2">
      <div className="shadow-black/10 gap-4 border bg-white dark:bg-neutral-900 border-transparent ring-1 rounded-tl-[16px] ring-black/10 flex flex-col items-start flex-1">
        <div className="flex items-center gap-2 border-b w-full py-2 px-4">
          <div className="size-3 rounded-full bg-neutral-400" />
          <p className="text-sm font-bold text-neutral-800 dark:text-neutral-200">Recent Activity</p>
        </div>
        <div className="flex flex-col gap-2 w-full px-2 pb-2">
          {list.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="flex justify-between items-center w-full pl-2"
            >
              <div className="flex items-center gap-2">
                {item.icon ? (
                  <div className="size-5 rounded-sm overflow-hidden">
                    <Media resource={item.icon} alt={item.title} className="object-cover w-full h-full" htmlElement={null} />
                  </div>
                ) : (
                  <div className="size-5 rounded-sm bg-blue-500" />
                )}
                <p className="text-sm text-neutral-600 dark:text-neutral-400">{item.title}</p>
                {item.badgeText && (
                  <div className="px-1 py-0.5 rounded-md border text-[10px] text-neutral-600 dark:text-neutral-400">{item.badgeText}</div>
                )}
              </div>
              <motion.p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-[16rem] whitespace-nowrap overflow-hidden text-ellipsis">
                {item.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

const SkeletonTwo: React.FC<{ galleryImages?: { image: MediaType }[] }> = ({ galleryImages }) => {
  const imgs = galleryImages?.map((g) => g.image) || []
  return (
    <div className="flex-1 rounded-t-3xl gap-4 space-y-4 w-full h-full px-8 flex-col items-center justify-center">
      <div className="grid grid-cols-4 gap-2 justify-center max-w-md mx-auto">
        <Tile media={imgs[0]} />
        <Tile media={imgs[1]} />
        <Tile media={imgs[2]} />
        <Tile media={imgs[3]} />
      </div>
      <div className="grid grid-cols-5 gap-2">
        <Tile media={imgs[4]} />
        <Tile media={imgs[5]} />
        <Tile>
          <div className="h-full w-full bg-white dark:bg-neutral-900 rounded-[12px] flex items-center justify-center">
            <div className="size-12 rounded-md bg-neutral-200 dark:bg-neutral-800" />
          </div>
        </Tile>
        <Tile media={imgs[6]} />
        <Tile media={imgs[7]} />
      </div>
      <div className="grid grid-cols-4 justify-center max-w-md mx-auto gap-2">
        <Tile media={imgs[8]} />
        <Tile media={imgs[9]} />
        <Tile media={imgs[10]} />
        <Tile media={imgs[11]} />
      </div>
    </div>
  )
}

const Tile: React.FC<{ children?: React.ReactNode; className?: string; containerClassName?: string; media?: MediaType }> = ({ children, className, containerClassName, media }) => {
  return (
    <div className={cn('w-full justify-self-center aspect-square rounded-xl border border-dashed border-neutral-200 dark:border-neutral-800 relative p-[1px]')}>
      <motion.div
        initial={{ opacity: 0, filter: 'blur(10px)' }}
        whileInView={{ opacity: 1, filter: 'blur(0px)' }}
        transition={{ duration: 0.6 }}
        className={cn('flex items-center justify-center w-full h-full  rounded-[12px] p-[1px] relative z-10', containerClassName)}
      >
        {children ?? (
          media ? (
            <div className="w-full h-full rounded-[12px] overflow-hidden">
              <Media resource={media} alt={media?.alt || 'item'} className="object-cover w-full h-full" htmlElement={null} />
            </div>
          ) : (
            <div className="size-12 rounded-md bg-neutral-200 dark:bg-neutral-800" />
          )
        )}
      </motion.div>
      <div className="absolute inset-0 bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:5px_5px] rounded-xl bg-fixed" />
    </div>
  )
}

const SkeletonThree: React.FC<{ pills?: { text: string }[] }> = ({ pills }) => {
  return (
    <div className="flex-1 rounded-t-3xl gap-2 flex flex-col z-20 mx-auto w-full h-full absolute inset-0 pt-2 px-2 perspective-[4000px] max-w-lg">
      <div
        className={cn(
          'flex items-center justify-center gap-20 h-[200%]',
          'absolute -inset-x-[150%] -inset-y-40',
          '[background-size:40px_40px]',
          '[background-image:linear-gradient(to_right,var(--color-neutral-200)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-neutral-200)_1px,transparent_1px)]',
          'dark:[background-image:linear-gradient(to_right,var(--color-neutral-700)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-neutral-700)_1px,transparent_1px)]',
          'mask-radial-from-50% mask-t-from-50% mask-b-from-50%'
        )}
        style={{ transform: 'rotateY(20deg) rotateX(50deg) rotateZ(40deg)' }}
      >
        <div className="px-4 py-2 rounded-full bg-orange-100 border border-orange-300 text-orange-500 font-medium">{pills?.[0]?.text || 'Processing'}</div>
        <div className="px-4 py-2 rounded-full bg-green-100 border border-green-300 text-green-500 font-medium">{pills?.[1]?.text || 'Feedback'}</div>
      </div>
    </div>
  )
}

const SkeletonFour: React.FC<{ items?: { title: string; description: string; color?: 'blue' | 'green' | 'indigo' | 'neutral' | 'purple'; tags?: { text: string; icon?: MediaType }[] }[] }> = ({ items }) => {
  const itemsList: { title: string; description: string; color?: 'blue' | 'green' | 'indigo' | 'neutral' | 'purple'; tags?: { text: string; icon?: MediaType }[] }[] =
    items && items.length
      ? items
      : [
          { title: 'Brand & Style', color: 'blue', description: 'Link systems to give agents secure access.' },
          { title: 'Compliance & Policy', color: 'green', description: 'Ensure agents follow company policies.' },
          { title: 'Content Safety Filters', color: 'indigo', description: 'Protect brand from harmful content.' },
          { title: 'Approval Triggers', color: 'neutral', description: 'Trigger approvals on predefined criteria.' },
        ]

  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const currentIndexRef = useRef(0)
  const [selected, setSelected] = useState(itemsList[0])

  useEffect(() => {
    startAutoplay()
    return () => stopAutoplay()
  }, [])

  const startAutoplay = () => {
    stopAutoplay()
    intervalRef.current = setInterval(() => {
      currentIndexRef.current = (currentIndexRef.current + 1) % itemsList.length
      setSelected(itemsList[currentIndexRef.current])
    }, 2000)
  }

  const stopAutoplay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }

  return (
    <div>
      <div className="flex gap-4 items-center justify-center max-w-lg mx-auto flex-wrap mb-4">
        {itemsList.map((item) => (
          <button
            key={item.title}
            onClick={() => setSelected(item)}
            className={cn('px-2 py-1 rounded-sm relative text-xs gap-1 cursor-pointer active:scale-98 transition duration-200 flex items-center justify-center opacity-50', selected.title === item.title && 'opacity-100', `bg-${item.color}-100 border border-${item.color}-200 dark:bg-${item.color}-100/10 dark:border-${item.color}-200/10`)}
          >
            {selected.title === item.title && (
              <motion.div layoutId="selected-item" className="absolute inset-0 rounded-[5px] shadow-inner" />
            )}
            <div className="size-3 rounded-full bg-current" />
            {item.title}
          </button>
        ))}
      </div>
      <div className="flex-1 rounded-t-3xl gap-2 flex flex-col bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-200 max-w-[20rem] lg:max-w-sm mx-auto w-full h-full absolute inset-x-0 p-2">
        <Card className={`bg-white`} title={selected.title} description={selected.description} tags={selected.tags} />
      </div>
    </div>
  )
}

const Card: React.FC<{ title: string; description: string; className?: string; tags?: { text: string; icon?: MediaType }[] }> = ({ title, description, className, tags }) => {
  return (
    <motion.div key={title} className={cn('p-4 shadow-black/10 gap-4 border bg-white dark:bg-neutral-900 border-transparent ring-1 rounded-[16px] ring-black/10 flex items-start flex-col', className)}>
      <div className="flex items-center gap-2">
        <div className="size-6 shrink-0 rounded-full flex mt-1 items-center justify-center bg-neutral-200" />
        <motion.p initial={{ opacity: 0, filter: 'blur(10px)' }} animate={{ opacity: 1, filter: 'blur(0px)' }} transition={{ delay: 0.1 }} className="text-lg font-bold text-neutral-800 dark:text-neutral-200">
          {title}
        </motion.p>
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
        <p className="text-base text-neutral-600">Tone Guidelines</p>
        <p className="text-sm mt-2 mb-4 text-neutral-600 dark:text-neutral-400 rounded-sm border border-neutral-200 dark:border-neutral-200/10 px-2 border-dashed py-1">
          {description}
        </p>
        {tags && tags.length > 0 && (
          <div className="mt-2 flex flex-row flex-wrap gap-2">
            {tags.map((tag, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + idx * 0.1 }} className="flex items-center gap-1 w-fit rounded-sm px-1 py-0.5 border border-neutral-200 dark:border-neutral-200/10 text-sm">
                {tag.icon ? (
                  <div className="size-3 overflow-hidden rounded">
                    <Media resource={tag.icon} alt={tag.text} className="object-cover w-full h-full" htmlElement={null} />
                  </div>
                ) : null}
                <p className="text-xs text-neutral-500">{tag.text}</p>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  )
}


