import Link from 'next/link'
import { DrupalRecipe } from '@/lib/types'
import ResponsiveImage from './ResponsiveImage'
import { ArrowRight, Clock } from 'lucide-react'

interface RecipeCardProps {
  item: DrupalRecipe
}

function normalizeTermText(value: any): string {
  if (!value) return ''
  if (Array.isArray(value)) {
    return value
      .map((entry) => (typeof entry === 'string' ? entry : entry?.name || entry?.title || entry?.id || ''))
      .filter(Boolean)
      .join(', ')
  }
  if (typeof value === 'object') {
    return value.name || value.title || value.id || ''
  }
  return String(value)
}

export default function RecipeCard({ item }: RecipeCardProps) {
  const recipeCategory = normalizeTermText((item as any).recipeCategory)

  return (
    <Link
      href={item.path || '#'}
      className="group bg-white rounded-2xl shadow-sm border border-stone-200 hover:shadow-lg transition-all duration-300 overflow-hidden"
    >
      <div className="relative h-52 bg-gradient-to-br from-accent-100 to-accent-200">
        {(item as any).image?.url ? (
          <ResponsiveImage
            src={(item as any).image.url}
            alt={(item as any).image.alt || item.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            variations={(item as any).image.variations}
            targetWidth={400}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-accent-200 rounded-full flex items-center justify-center">
              <Clock className="w-10 h-10 text-accent-600" />
            </div>
          </div>
        )}
        {recipeCategory && (
          <span className="absolute top-3 left-3 bg-accent-700 text-white text-xs font-semibold px-3 py-1 rounded-full">
            {recipeCategory}
          </span>
        )}
      </div>

      <div className="p-6">
        {(item as any).prepTime && (
          <div className="flex items-center gap-1 text-sm text-primary-700 font-medium mb-2">
            <Clock className="w-3.5 h-3.5" />
            <span>Prep: {(item as any).prepTime}</span>
            {(item as any).cookTime && <span className="ml-2">Cook: {(item as any).cookTime}</span>}
          </div>
        )}
        <h3 className="font-serif text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors">
          {item.title}
        </h3>

        {(item as any).body?.processed && (
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {(item as any).body.processed.replace(/<[^>]*>/g, '').substring(0, 150)}
          </p>
        )}

        <div className="flex items-center text-primary-700 font-medium group-hover:gap-2 transition-all text-sm">
          View recipe
          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  )
}
