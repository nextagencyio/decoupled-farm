import { gql } from '@apollo/client'

export const GET_ARTICLE_TEASERS = gql`
  query GetArticleTeasers($first: Int = 10) {
    nodeArticles(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created {
          timestamp
        }
        changed {
          timestamp
        }
        ... on NodeArticle {
          body {
            processed
            summary
          }
          image {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM, THUMBNAIL]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

export const GET_ARTICLE_BY_PATH = gql`
  query GetArticleByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeArticle {
            id
            title
            body {
              processed
            }
            created {
              timestamp
            }
            changed {
              timestamp
            }
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM, THUMBNAIL]) {
                name
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`

export const GET_HOMEPAGE_DATA = gql`
  query GetHomepageData {
    nodeHomepages(first: 1) {
      nodes {
        id
        title
        path
        heroTitle
        heroSubtitle
        heroDescription { processed summary }
        statsItems { ... on ParagraphStatItem { id title description { processed } icon } }
        featuredItemsTitle
        ctaTitle
        ctaDescription { processed summary }
        ctaPrimary
        ctaSecondary
      }
    }
  }
`

export const GET_NODE_BY_PATH = gql`
  query GetNodeByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodePage {
            id
            title
            body {
              processed
            }
          }
          ... on NodeArticle {
            id
            title
            body {
              processed
            }
            created {
              timestamp
            }
            changed {
              timestamp
            }
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM, THUMBNAIL]) {
                name
                url
                width
                height
              }
            }
          }
          ... on NodeHomepage {
            id
            title
            heroTitle
            heroSubtitle
            heroDescription {
              processed
            }
            featuresTitle
            featuresSubtitle
            featuresItems {
              ... on ParagraphFeatureItem {
                id
                title
                description {
                  processed
                }
                icon
              }
            }
            ctaTitle
            ctaDescription {
              processed
            }
            ctaPrimary
            ctaSecondary
          }
        }
      }
    }
  }
`

export const GET_PRODUCTS = gql`
  query GetProducts($first: Int = 10) {
    nodeProducts(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created { timestamp }
        ... on NodeProduct {
          body { processed summary }
          productCategory
          price
          unit
          available
          growingMethod
          image { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
          featured
        }
      }
    }
  }
`

export const GET_PRODUCT_BY_PATH = gql`
  query GetProductByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeProduct {
            id
            title
            path
          body { processed summary }
          productCategory
          price
          unit
          available
          growingMethod
          image { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
          featured
          }
        }
      }
    }
  }
`

export const GET_SEASONS = gql`
  query GetSeasons($first: Int = 10) {
    nodeSeasons(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created { timestamp }
        ... on NodeSeason {
          body { processed summary }
          startMonth
          endMonth
          whatsGrowing
          farmActivities
          image { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
        }
      }
    }
  }
`

export const GET_SEASON_BY_PATH = gql`
  query GetSeasonByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeSeason {
            id
            title
            path
          body { processed summary }
          startMonth
          endMonth
          whatsGrowing
          farmActivities
          image { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
          }
        }
      }
    }
  }
`

export const GET_RECIPES = gql`
  query GetRecipes($first: Int = 10) {
    nodeRecipes(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created { timestamp }
        ... on NodeRecipe {
          body { processed summary }
          prepTime
          cookTime
          servings
          ingredients
          recipeCategory
          image { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
        }
      }
    }
  }
`

export const GET_RECIPE_BY_PATH = gql`
  query GetRecipeByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeRecipe {
            id
            title
            path
          body { processed summary }
          prepTime
          cookTime
          servings
          ingredients
          recipeCategory
          image { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
          }
        }
      }
    }
  }
`
