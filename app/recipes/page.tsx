import { Metadata } from 'next'
import { headers } from 'next/headers'
import { getServerApolloClient } from '@/lib/apollo-client'
import { GET_RECIPES } from '@/lib/queries'
import { RecipesData } from '@/lib/types'
import Header from '../components/Header'
import RecipeCard from '../components/RecipeCard'
import { Leaf } from 'lucide-react'

export const revalidate = 3600
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Farm Recipes | Sunstone Family Farm',
  description: 'Delicious recipes using fresh, seasonal ingredients from Sunstone Family Farm.',
}

async function getRecipes() {
  try {
    const requestHeaders = await headers()
    const apolloClient = getServerApolloClient(requestHeaders)
    const { data } = await apolloClient.query<RecipesData>({
      query: GET_RECIPES,
      variables: { first: 50 },
      fetchPolicy: 'cache-first',
    })
    return data?.nodeRecipes?.nodes || []
  } catch (error) {
    console.error('Error fetching recipes:', error)
    return []
  }
}

export default async function RecipesPage() {
  const items = await getRecipes()

  return (
    <div className="min-h-screen bg-stone-50">
      <Header />

      {/* Nature-themed hero */}
      <section className="relative bg-primary-900 text-white pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1920&q=80&fit=crop)' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/80 to-primary-900" />
        <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" className="fill-stone-50" />
        </svg>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-6">
              <Leaf className="w-4 h-4 text-primary-300" />
              <span className="text-primary-200 text-sm font-medium">From our kitchen</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Farm Recipes
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Simple, wholesome recipes featuring seasonal ingredients straight from our fields.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {items.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="w-10 h-10 text-accent-500" />
              </div>
              <h2 className="font-serif text-2xl font-semibold text-gray-700 mb-3">No Recipes Yet</h2>
              <p className="text-gray-500 max-w-md mx-auto">
                Our farm recipes will appear here once content is imported. Check back soon!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((item) => (
                <RecipeCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
