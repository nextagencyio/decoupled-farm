
export interface ImageVariation {
  name: string
  url: string
  width: number
  height: number
}

export interface DrupalImage {
  url: string
  alt: string
  width?: number
  height?: number
  variations?: ImageVariation[]
}

export interface DrupalNode {
  id: string
  title: string
  path: string
  created: {
    timestamp: number
  }
  changed: {
    timestamp: number
  }
}

export interface DrupalArticle extends DrupalNode {
  body?: {
    processed: string
    summary?: string
  }
  image?: {
    url: string
    alt?: string
    width?: number
    height?: number
    variations?: Array<{
      name: string
      url: string
      width: number
      height: number
    }>
  }
}

export interface ArticleTeaserData {
  nodeArticles: {
    nodes: DrupalArticle[]
  }
}

export interface DrupalPage extends DrupalNode {
  body?: {
    processed: string
  }
}

export interface DrupalStatItem {
  id: string
  number?: string
  label?: string
}

export interface DrupalHomepage extends DrupalNode {
  heroTitle?: string
  heroSubtitle?: string
  heroDescription?: {
    processed: string
  }
  statsItems?: DrupalStatItem[]
  featuredItemsTitle?: string
  ctaTitle?: string
  ctaDescription?: {
    processed: string
  }
  ctaPrimary?: string
  ctaSecondary?: string
}

export interface HomepageData {
  nodeHomepages: {
    nodes: DrupalHomepage[]
  }
}

export interface TermReference {
  name: string
}

export interface DrupalProduct {
  id: string
  title: string
  path?: string
  body?: { processed: string; summary?: string }
  productCategory?: TermReference[]
  price?: string
  unit?: string
  available?: boolean
  growingMethod?: string
  image?: { url: string; alt: string; width?: number; height?: number; variations?: { name: string; url: string; width: number; height: number }[] }
  featured?: boolean
}

export interface ProductsData {
  nodeProducts: {
    nodes: DrupalProduct[]
  }
}

export interface DrupalSeason {
  id: string
  title: string
  path?: string
  body?: { processed: string; summary?: string }
  startMonth?: string
  endMonth?: string
  whatsGrowing?: string[]
  farmActivities?: string[]
  image?: { url: string; alt: string; width?: number; height?: number; variations?: { name: string; url: string; width: number; height: number }[] }
}

export interface SeasonsData {
  nodeSeasons: {
    nodes: DrupalSeason[]
  }
}

export interface DrupalRecipe {
  id: string
  title: string
  path?: string
  body?: { processed: string; summary?: string }
  prepTime?: string
  cookTime?: string
  servings?: string
  ingredients?: string[]
  recipeCategory?: TermReference[]
  image?: { url: string; alt: string; width?: number; height?: number; variations?: { name: string; url: string; width: number; height: number }[] }
}

export interface RecipesData {
  nodeRecipes: {
    nodes: DrupalRecipe[]
  }
}
