import {createClient} from '@sanity/client'
import type {NextRequest} from 'next/server'
import {NextResponse} from 'next/server'
import OpenAI from 'openai'

// CORS configuration
const corsHeaders = {
  'Access-Control-Allow-Origin': '*', // In production, replace with your studio URL
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
}

// Handle preflight requests
export async function OPTIONS(_request: NextRequest) {
  return new Response(null, {
    status: 200,
    headers: corsHeaders,
  })
}

// Create Sanity client
function createSanityClient(projectId: string | undefined) {
  return createClient({
    projectId,
    dataset: 'glowing-engine', // Use your dataset name
    useCdn: false,
    apiVersion: '2024-01-01',
  })
}

// Get basic schema information from existing documents
async function getSchemaFromDocuments(client: ReturnType<typeof createSanityClient>) {
  try {
    // Query for different document types and their structure
    const documentTypes = await client.fetch(`
      {
        "types": *[!(_id in path("drafts.**"))] | {
          "type": _type,
          "fields": keys(@) | [@ != "_id" && @ != "_rev" && @ != "_type" && @ != "_createdAt" && @ != "_updatedAt"]
        } | group(_type)[0...10] {
          "name": _key,
          "fields": @[].fields[] | unique
        }
      }
    `)

    return documentTypes.types || []
  } catch (error) {
    console.warn('Could not fetch schema from documents:', error)
    // Return a basic fallback schema
    return [
      {
        name: 'document',
        fields: [
          '_id',
          '_type',
          '_rev',
          '_createdAt',
          '_updatedAt',
          'title',
          'slug',
          'description',
          'content',
          'publishedAt',
          'author',
        ],
      },
      {
        name: 'post',
        fields: [
          'title',
          'slug',
          'author',
          'mainImage',
          'categories',
          'publishedAt',
          'body',
          'excerpt',
        ],
      },
      {
        name: 'author',
        fields: ['name', 'slug', 'image', 'bio'],
      },
      {
        name: 'category',
        fields: ['title', 'description'],
      },
    ]
  }
}

// Define schema type structure
type SchemaType = {
  name: string
  fields: string[]
}

// Prompt builder
function buildPrompt(userRequest: string, schemaTypes: SchemaType[]) {
  return `
You are an expert in writing Sanity GROQ queries.

You will be given:

- A natural language request.
- Information about the Sanity schema types and fields available in this project.

Your job:

- Generate a valid GROQ query based on the request.
- Only output the GROQ query. Do not explain, add comments, or include any additional text.
- Use the available document types and fields shown in the schema.

Available Schema Types:
${JSON.stringify(schemaTypes, null, 2)}

Common GROQ patterns to remember:
- Filter documents: *[_type == "post"]
- Get published only: *[_type == "post" && !(_id in path("drafts.**"))]
- Include references: *[_type == "post"]{..., author->}
- Filter by field: *[_type == "post" && publishedAt < now()]
- Order results: *[_type == "post"] | order(publishedAt desc)
- Limit results: *[_type == "post"][0...10]

User Request:
${userRequest}
`
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(request: NextRequest) {
  try {
    const {prompt: userRequest} = await request.json()
    const projectId = process.env.SANITY_PROJECT_ID || 'uhpaa149'

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        {error: 'OpenAI API key not configured'},
        {status: 500, headers: corsHeaders},
      )
    }

    // Create Sanity client and get schema information
    const client = createSanityClient(projectId)
    const schemaTypes = await getSchemaFromDocuments(client)
    const fullPrompt = buildPrompt(userRequest, schemaTypes)

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [{role: 'user', content: fullPrompt}],
      temperature: 0,
    })

    const groqQuery = completion.choices[0]?.message?.content?.trim()

    return NextResponse.json({query: groqQuery}, {headers: corsHeaders})
  } catch (error) {
    console.error('Error generating GROQ query:', error)
    return NextResponse.json(
      {error: 'Failed to generate GROQ query. Check your Sanity configuration.'},
      {status: 500, headers: corsHeaders},
    )
  }
}
