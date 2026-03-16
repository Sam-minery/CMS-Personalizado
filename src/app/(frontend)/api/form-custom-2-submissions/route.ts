import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'
import { validateFormData } from '@/utilities/sanitizeHTML'

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
    
    // Validar los datos del formulario (no sanitizar - Payload escapará al mostrar)
    const validation = validateFormData(formData)
    if (validation !== true) {
      return NextResponse.json(
        { error: validation },
        { status: 400 }
      )
    }

    // Determinar el tipo de formulario basado en el parámetro formType
    const source = formType === 'multi-form-2' ? 'multi-form-2' : 
                   formType === 'banner1' ? 'banner1' :
                   formType === 'contact1' ? 'contact1' :
                   formType === 'contact5' ? 'contact5' : 'form-custom-2'

    // Crear el envío del formulario en la collection FormCustom2Submissions
    const formSubmissionData = {
      name: formData.name || formData.email || 'Usuario',
      email: formData.email,
      serviceType: formData.serviceType || (source === 'banner1' ? 'Banner subscription' : 'Contact form'),
      budget: formData.budget || 'N/A',
      aboutProject: formData.aboutProject || (source === 'banner1' ? 'Suscripción desde Banner1' : 'Mensaje de contacto'),
      companyName: formData.companyName || 'N/A',
      employees: formData.employees || 'N/A',
      website: formData.website || 'N/A',
      country: formData.country || 'N/A',
      date: formData.date || new Date().toISOString(),
      source: source as 'form-custom-2' | 'multi-form-2' | 'banner1' | 'contact1' | 'contact5',
    }

    const formSubmission = await payload.create({
      collection: 'form-custom-2-submissions',
      data: formSubmissionData,
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