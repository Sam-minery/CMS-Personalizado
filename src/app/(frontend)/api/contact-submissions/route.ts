import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'
import { validateFormData } from '@/utilities/sanitizeHTML'

export async function POST(request: NextRequest) {
  try {
    const payload = await getPayload({ config })
    const body = await request.json()
    const { submissionData } = body

    if (!submissionData || !Array.isArray(submissionData)) {
      return NextResponse.json(
        { error: 'Invalid submission data' },
        { status: 400 }
      )
    }

    // Convertir submissionData a un objeto plano
    const formData = submissionData.reduce((acc, item) => {
      acc[item.field] = item.value
      return acc
    }, {} as Record<string, string>)
    
    // Validar los datos del formulario (no sanitizar - Payload escapará al mostrar)
    const validation = validateFormData(formData)
    if (validation !== true) {
      return NextResponse.json(
        { error: validation },
        { status: 400 }
      )
    }

    // Crear el envío del formulario en la collection ContactSubmissions
    const formSubmission = await payload.create({
      collection: 'contact-submissions',
      data: {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        topic: formData.topic,
        description: formData.description,
        message: formData.message,
        acceptTerms: formData.acceptTerms === 'true',
        source: 'contact-section-2',
      },
    })

    console.log('Form submission saved to Payload:', formSubmission)

    return NextResponse.json(
      { 
        success: true, 
        message: 'Form submitted successfully',
        id: formSubmission.id 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Error submitting form:', error)
    
    return NextResponse.json(
      { 
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
} 