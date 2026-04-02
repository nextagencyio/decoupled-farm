import { getClient } from '@/lib/drupal-client'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { GET_RECIPE_BY_PATH } from '@/lib/queries'
import { DrupalRecipe } from '@/lib/types'
import Header from '../../components/Header'
import ResponsiveImage from '../../components/ResponsiveImage'
import { ArrowLeft } from 'lucide-react'

export const revalidate = 300
export const dynamic = 'force-dynamic'

interface PageProps {
  params: Promise<{ slug: string[] }>
}

interface RecipeByPathData {
  route: {
    entity: DrupalRecipe
  } | null
}

async function getRecipe(path: string): Promise<DrupalRecipe | null> {
  try {
    const client = getClient()
    const { data } = await client.raw(GET_RECIPE_BY_PATH, { path })
    return data?.route?.entity || null
  } catch (error) {
    console.error('Error fetching recipe:', error)
    return null
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const path = `/recipes/${slug.join('/')}`
  const item = await getRecipe(path)

  if (!item) {
    return { title: 'Recipe Not Found | Farm' }
  }

  return {
    title: `${item.title} | Farm`,
    description: ((item as any).body?.processed ? (item as any).body.processed.replace(/<[^>]*>/g, '').substring(0, 160) : '') || `Learn more about ${item.title}.`,
  }
}

export default async function RecipeDetailPage({ params }: PageProps) {
  const { slug } = await params
  const path = `/recipes/${slug.join('/')}`
  const item = await getRecipe(path)

  if (!item) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <section className="bg-gradient-to-br from-lime-900 via-lime-800 to-lime-900 text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/recipes"
            className="inline-flex items-center text-lime-200 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Recipes
          </Link>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            {item.title}
          </h1>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {(item as any).image?.url && (
                <div className="relative h-64 md:h-96 rounded-xl overflow-hidden shadow-lg mb-8">
                  <ResponsiveImage
                    src={(item as any).image.url}
                    alt={(item as any).image.alt || item.title}
                    fill
                    className="object-cover"
                    variations={(item as any).image.variations}
                    targetWidth={800}
                  />
                </div>
              )}

              {(item as any).body?.processed && (
                <div className="bg-white rounded-xl shadow-sm p-8">
                  <div
                    className="prose prose-lg max-w-none"
                    dangerouslySetInnerHTML={{ __html: (item as any).body.processed }}
                  />
                </div>
              )}
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Details</h3>
                <dl className="space-y-4">
                  {(item as any).prepTime && (
                    <div>
                      <dt className="text-sm text-gray-500">Prep Time</dt>
                      <dd className="font-semibold text-gray-900">{(item as any).prepTime}</dd>
                    </div>
                  )}
                  {(item as any).cookTime && (
                    <div>
                      <dt className="text-sm text-gray-500">Cook Time</dt>
                      <dd className="font-semibold text-gray-900">{(item as any).cookTime}</dd>
                    </div>
                  )}
                  {(item as any).servings && (
                    <div>
                      <dt className="text-sm text-gray-500">Servings</dt>
                      <dd className="font-semibold text-gray-900">{(item as any).servings}</dd>
                    </div>
                  )}
                </dl>
                <div className="mt-8">
                  <Link
                    href="/contact"
                    className="block w-full text-center px-6 py-3 bg-lime-700 text-white rounded-lg font-bold hover:bg-lime-600 transition-colors"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
