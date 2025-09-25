import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'

export async function POST(request: NextRequest) {
  try {
    const payload = await getPayload({ config })
    const body = await request.json()
    const { submissionData, formType = 'form-custom-2' } = body

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
    }, {} as Record<string, unknown>)

    // Determinar el tipo de formulario basado en el parámetro formType
    const source = formType === 'multi-form-2' ? 'multi-form-2' : 'form-custom-2'

    // Crear el envío del formulario en la collection FormCustom2Submissions
    const formSubmission = await payload.create({
      collection: 'form-custom-2-submissions',
      data: {
        name: formData.name,
        email: formData.email,
        serviceType: formData.serviceType,
        budget: formData.budget,
        aboutProject: formData.aboutProject,
        companyName: formData.companyName,
        employees: formData.employees,
        website: formData.website,
        country: formData.country,
        date: formData.date,
        source: source,
      },
    })

    console.log(`${source} submission saved to Payload:`, formSubmission)

    return NextResponse.json(
      { 
        success: true, 
        message: 'Form submitted successfully',
        id: formSubmission.id 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Error submitting form custom 2:', error)
    
    return NextResponse.json(
      { 
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
} 