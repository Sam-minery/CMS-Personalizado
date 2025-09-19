"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { useForm, UseFormReturn } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { DateTime } from 'luxon'
import clsx from 'clsx'

import {
  Button,
  Calendar,
  cn,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@relume_io/relume-ui'
// ButtonProps type removed as it's not used
import { BiEnvelope } from 'react-icons/bi'
import { FaRegCalendar } from 'react-icons/fa6'

const formSchema = z.object({
  name: z.string().min(1, {
    message: 'This field is required',
  }),
  email: z
    .string()
    .min(1, { message: 'This field is required' })
    .email({ message: 'Please enter a valid email address' }),
  serviceType: z.string().min(1, { message: 'This field is required' }),
  budget: z.string().min(1, { message: 'This field is required' }),
  aboutProject: z.string().min(1, { message: 'This field is required' }),
  companyName: z.string().min(1, { message: 'This field is required' }),
  employees: z.string().min(1, { message: 'This field is required' }),
  website: z.string().min(1, { message: 'This field is required' }).url(),
  country: z.string().min(1, { message: 'This field is required' }),
  date: z.date({
    message: 'This field is required',
  }),
})

type FormValues = z.infer<typeof formSchema>

interface StepProps {
  form: UseFormReturn<FormValues>
  stepTitle: string
  stepDescription: string
}

export const Form_custom_2Block: React.FC<{
  logo?: {
    url?: string
    src?: string
    alt?: string
  }
  navText?: string
  navButton?: {
    title?: string
    variant?: 'link' | 'secondary' | 'primary' | 'secondary-alt' | 'tertiary' | 'link-alt' | 'ghost'
    size?: 'link' | 'primary' | 'sm' | 'icon'
  }
  footerText?: string
  step1Title?: string
  step1Description?: string
  step2Title?: string
  step2Description?: string
  step3Title?: string
  step3Description?: string
  step4Title?: string
  step4Description?: string
  serviceTypeOptions?: Array<{ label: string; value: string }>
  budgetOptions?: Array<{ label: string; value: string }>
  employeesOptions?: Array<{ label: string; value: string }>
  countriesOptions?: Array<{ id: number; label: string; value: string }>
}> = ({
  logo = { url: '#', src: 'https://d22po4pjz3o32e.cloudfront.net/logo-image.svg', alt: 'Logo image' },
  navText = 'Already have an account?',
  navButton = { title: 'Log In', variant: 'link', size: 'link' },
  footerText = '© 2024 Relume',
  step1Title = "Let's start with your name & email",
  step1Description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
  step2Title = 'What can we help you with?',
  step2Description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
  step3Title = "Let's confirm your company info",
  step3Description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
  step4Title = "Let's confirm your company info",
  step4Description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
  // Options removed as they are not used in the component
}) => {
  const [step, setStep] = useState(0)
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      serviceType: '',
      budget: '',
      aboutProject: '',
      companyName: '',
      employees: '',
      website: '',
      country: '',
    },
    mode: 'onChange',
  })

  const onSubmit = async (values: FormValues) => {
    try {
      // Convertir los valores del formulario al formato esperado por la API
      const submissionData = Object.entries(values).map(([field, value]) => ({
        field,
        value: value instanceof Date ? value.toISOString() : String(value)
      }))

      const response = await fetch('/api/form-custom-2-submissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ submissionData }),
      })

      if (response.ok) {
        const result = await response.json()
        console.log('Form submitted successfully:', result)
        // Aquí puedes agregar lógica para mostrar un mensaje de éxito
        alert('Formulario enviado exitosamente!')
      } else {
        const error = await response.json()
        console.error('Error submitting form:', error)
        alert('Error al enviar el formulario. Por favor, inténtalo de nuevo.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Error al enviar el formulario. Por favor, inténtalo de nuevo.')
    }
  }

  const steps = [
    { component: StepOne, fields: ['name', 'email'], title: step1Title, description: step1Description },
    { component: StepTwo, fields: ['serviceType', 'budget', 'aboutProject'], title: step2Title, description: step2Description },
    { component: StepThree, fields: ['companyName', 'employees', 'website'], title: step3Title, description: step3Description },
    { component: StepFour, fields: ['country', 'date'], title: step4Title, description: step4Description },
  ] as const

  const Step = steps[step].component
  const currentFields = steps[step].fields
  const totalSteps = steps.length
  const isLastStep = step === steps.length - 1
  const isFirstStep = step === 0

  const handleNext = async () => {
    const output = await form.trigger(currentFields)
    if (output) {
      setStep((prev) => prev + 1)
    }
  }

  const handlePrev = () => {
    if (!isFirstStep) {
      setStep((prev) => prev - 1)
    }
  }

  return (
    <div className="flex min-h-dvh flex-col">
      <nav className="px-[5%]">
        <div className="flex min-h-16 items-center justify-between md:min-h-18">
          <a href={logo.url}>
            {(logo.src || logo.url) && (
              <Image 
                src={logo.src || logo.url || 'https://d22po4pjz3o32e.cloudfront.net/logo-image.svg'} 
                alt={logo.alt || 'Logo'} 
                width={150} 
                height={50} 
              />
            )}
          </a>
          <div className="flex items-center gap-x-1">
            <span className="hidden md:inline-block">{navText}</span>
            <Button className="underline" variant={navButton.variant} size={navButton.size}>
              {navButton.title}
            </Button>
          </div>
        </div>
      </nav>
      <ProgressBar step={step} totalSteps={totalSteps} />
      <section id="relume" className="flex grow flex-col justify-center px-[5%] pb-5 pt-10">
        <div className="mx-auto w-full max-w-md">
          <Form {...form}>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                if (!isLastStep) {
                  handleNext()
                } else {
                  form.handleSubmit(onSubmit)()
                }
              }}
            >
              <Step form={form} stepTitle={steps[step].title} stepDescription={steps[step].description} />
              <StepAction
                step={step}
                totalSteps={totalSteps}
                isFirstStep={isFirstStep}
                isLastStep={isLastStep}
                handlePrev={handlePrev}
              />
            </form>
          </Form>
        </div>
      </section>
      <footer className="px-[5%]">
        <div className="flex min-h-16 items-center justify-center md:min-h-18">
          <p className="text-sm">{footerText}</p>
        </div>
      </footer>
    </div>
  )
}

const ProgressBar = ({ step, totalSteps }: { step: number; totalSteps: number }) => {
  const progress = (step / totalSteps) * 100
  return (
    <div className="relative h-1 bg-background-secondary">
      <div
        className="absolute left-0 top-0 h-full bg-background-alternative transition-all"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  )
}

const StepAction = ({
  step,
  totalSteps,
  isFirstStep,
  isLastStep,
  handlePrev,
}: {
  step: number
  totalSteps: number
  isFirstStep: boolean
  isLastStep: boolean
  handlePrev: () => void
}) => (
  <div className="mt-6 flex items-center justify-between gap-2">
    <p>
      Step {step + 1}/{totalSteps}
    </p>
    <div className="flex flex-wrap gap-4">
      <Button
        type="button"
        variant="secondary"
        onClick={() => {
          if (!isFirstStep) {
            handlePrev()
          }
        }}
      >
        {isFirstStep ? 'Cancel' : 'Back'}
      </Button>
      <Button type="submit">{isLastStep ? 'Get started' : 'Next'}</Button>
    </div>
  </div>
)

const StepOne: React.FC<StepProps> = ({ form, stepTitle, stepDescription }) => (
  <React.Fragment>
    <div className="mb-6 text-center md:mb-8">
      <h2 className="text-2xl font-bold md:text-3xl md:leading-[1.3] lg:text-4xl">
        {stepTitle}
      </h2>
      <p className="mt-3 md:mt-4">{stepDescription}</p>
    </div>
    <div className="flex flex-col gap-y-6">
      <FormField
        control={form.control}
        name="name"
        render={({ field, fieldState }) => (
          <FormItem>
            <FormLabel className={clsx({ 'text-text-error': fieldState.invalid })}>
              Enter your name
            </FormLabel>
            <FormControl>
              <Input className={clsx({ 'border-border-error': fieldState.invalid })} {...field} />
            </FormControl>
            <FormMessage className="text-base text-text-error" />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="email"
        render={({ field, fieldState }) => (
          <FormItem>
            <FormLabel className={clsx({ 'text-text-error': fieldState.invalid })}>
              Enter your email*
            </FormLabel>
            <FormControl>
              <Input
                placeholder="hello@relume.io"
                iconPosition="left"
                icon={<BiEnvelope className="size-6" />}
                className={clsx({ 'border-border-error': fieldState.invalid })}
                {...field}
              />
            </FormControl>
            <FormMessage className="text-base text-text-error" />
          </FormItem>
        )}
      />
    </div>
  </React.Fragment>
)

const StepTwo: React.FC<StepProps> = ({ form, stepTitle, stepDescription }) => {
  const serviceTypeData = [
    { label: 'Website design', value: 'A' },
    { label: 'Webflow development', value: 'B' },
    { label: 'Custom code solutions', value: 'C' },
    { label: 'Other', value: 'D' },
  ]
  return (
    <React.Fragment>
      <div className="mb-6 text-center md:mb-8">
        <h2 className="text-2xl font-bold md:text-3xl md:leading-[1.3] lg:text-4xl">
          {stepTitle}
        </h2>
        <p className="mt-3 md:mt-4">{stepDescription}</p>
      </div>
      <div className="flex flex-col gap-y-6">
        <FormField
          control={form.control}
          name="serviceType"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel className={clsx({ 'text-text-error': fieldState.invalid })}>
                Service type
              </FormLabel>
              <FormControl>
                <div className="flex flex-wrap gap-2">
                  {serviceTypeData.map((item, index) => {
                    return (
                      <Button
                        key={index}
                        className="py-2 pl-2 pr-4"
                        type="button"
                        variant={field.value === item.value ? 'primary' : 'secondary'}
                        onClick={() => field.onChange(item.value)}
                      >
                        <span className="mr-2 inline-flex size-8 items-center justify-center border border-border-primary uppercase">
                          {item.value}
                        </span>
                        {item.label}
                      </Button>
                    )
                  })}
                </div>
              </FormControl>
              <FormMessage className="text-base text-text-error" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="budget"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel className={clsx({ 'text-text-error': fieldState.invalid })}>
                Your budget
              </FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger className={clsx({ 'border-border-error': fieldState.invalid })}>
                    <SelectValue placeholder="Select one..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="first">First choice</SelectItem>
                    <SelectItem value="second">Second choice</SelectItem>
                    <SelectItem value="third">Third choice</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage className="text-base text-text-error" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="aboutProject"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel className={clsx({ 'text-text-error': fieldState.invalid })}>
                About the project
              </FormLabel>
              <FormControl>
                <Input className={clsx({ 'border-border-error': fieldState.invalid })} {...field} />
              </FormControl>
              <FormMessage className="text-base text-text-error" />
            </FormItem>
          )}
        />
      </div>
    </React.Fragment>
  )
}

const StepThree: React.FC<StepProps> = ({ form, stepTitle, stepDescription }) => {
  const employeesData = [
    { label: 'Just me', value: '1' },
    { label: '2-10', value: '2-10' },
    { label: '11-50', value: '11-50' },
    { label: '51-100', value: '51-100' },
    { label: '101-500', value: '101-500' },
    { label: '501+', value: '501+' },
  ]
  return (
    <React.Fragment>
      <div className="mb-6 text-center md:mb-8">
        <h2 className="text-2xl font-bold md:text-3xl md:leading-[1.3] lg:text-4xl">
          {stepTitle}
        </h2>
        <p className="mt-3 md:mt-4">{stepDescription}</p>
      </div>
      <div className="flex flex-col gap-y-6">
        <FormField
          control={form.control}
          name="companyName"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel className={clsx({ 'text-text-error': fieldState.invalid })}>
                What is your company name?
              </FormLabel>
              <FormControl>
                <Input className={clsx({ 'border-border-error': fieldState.invalid })} {...field} />
              </FormControl>
              <FormMessage className="text-base text-text-error" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="employees"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel className={clsx({ 'text-text-error': fieldState.invalid })}>
                How many people are you working with?
              </FormLabel>
              <FormControl>
                <div className="flex flex-wrap gap-2">
                  {employeesData.map((item, index) => {
                    return (
                      <Button
                        key={index}
                        type="button"
                        className="px-4 py-2"
                        variant={field.value === item.value ? 'primary' : 'secondary'}
                        onClick={() => field.onChange(item.value)}
                      >
                        {item.label}
                      </Button>
                    )
                  })}
                </div>
              </FormControl>
              <FormMessage className="text-base text-text-error" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="website"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel className={clsx({ 'text-text-error': fieldState.invalid })}>
                Website link
              </FormLabel>
              <FormControl>
                <Input className={clsx({ 'border-border-error': fieldState.invalid })} {...field} />
              </FormControl>
              <FormMessage className="text-base text-text-error" />
            </FormItem>
          )}
        />
      </div>
    </React.Fragment>
  )
}

const StepFour: React.FC<StepProps> = ({ form, stepTitle, stepDescription }) => {
  const countriesData = [
    { id: 1, value: 'US', label: 'United States' },
    { id: 2, value: 'CA', label: 'Canada' },
    { id: 3, value: 'GB', label: 'United Kingdom' },
    { id: 4, value: 'AU', label: 'Australia' },
    { id: 5, value: 'DE', label: 'Germany' },
    { id: 6, value: 'FR', label: 'France' },
    { id: 7, value: 'IT', label: 'Italy' },
    { id: 8, value: 'ES', label: 'Spain' },
    { id: 9, value: 'JP', label: 'Japan' },
    { id: 10, value: 'CN', label: 'China' },
    { id: 11, value: 'IN', label: 'India' },
    { id: 12, value: 'BR', label: 'Brazil' },
    { id: 13, value: 'ZA', label: 'South Africa' },
    { id: 14, value: 'RU', label: 'Russia' },
    { id: 15, value: 'MX', label: 'Mexico' },
  ]
  return (
    <React.Fragment>
      <div className="mb-6 text-center md:mb-8">
        <h2 className="text-2xl font-bold md:text-3xl md:leading-[1.3] lg:text-4xl">
          {stepTitle}
        </h2>
        <p className="mt-3 md:mt-4">{stepDescription}</p>
      </div>
      <div className="flex flex-col gap-y-6">
        <FormField
          control={form.control}
          name="country"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel className={clsx({ 'text-text-error': fieldState.invalid })}>
                Country
              </FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger className={clsx({ 'border-border-error': fieldState.invalid })}>
                    <SelectValue placeholder="Select one..." />
                  </SelectTrigger>
                  <SelectContent>
                    {countriesData.map((country) => (
                      <SelectItem key={country.id} value={country.value}>
                        {country.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage className="text-base text-text-error" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="date"
          render={({ field, fieldState }) => (
            <FormItem className="flex flex-col">
              <FormLabel className={clsx({ 'text-text-error': fieldState.invalid })}>
                Preferred date for chat
              </FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={'secondary'}
                    className={cn(
                      'justify-start py-[9px] pl-3 text-left font-normal',
                      !field.value && 'text-muted-foreground',
                      fieldState.invalid && 'border-border-error',
                    )}
                    type="button"
                  >
                    <FaRegCalendar className="size-5" />
                    {field.value ? (
                      DateTime.fromJSDate(field.value).toFormat('dd/MM/yyyy')
                    ) : (
                      <span>dd/mm/yyyy</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={(date) => field.onChange(date)}
                    disabled={(date) =>
                      DateTime.fromJSDate(date).startOf('day') < DateTime.now().startOf('day')
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage className="text-base text-text-error" />
            </FormItem>
          )}
        />
      </div>
    </React.Fragment>
  )
} 