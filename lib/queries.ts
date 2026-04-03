// Tagged template that returns the query string
const gql = (strings: TemplateStringsArray, ...values: any[]) => strings.reduce((a, s, i) => a + s + (values[i] || ''), '')

export const GET_HOMEPAGE_DATA = gql`
  query GetHomepageData {
    nodeHomepages(first: 1) {
      nodes {
        id
        title
        path
        heroTitle
        heroSubtitle
        heroDescription { processed }
        statsItems {
          ... on ParagraphStatItem {
            id
            number
            label
          }
        }
        featuredItemsTitle
        ctaTitle
        ctaDescription { processed }
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
            __typename
            id
            title
            path
            body {
              processed
            }
          }
          ... on NodeProduct {
            __typename
            id
            title
            path
            body { processed }
            productCategory {
              ... on TermProductCategory { name }
            }
            price
            unit
            available
            growingMethod
            image { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
            featured
          }
          ... on NodeSeason {
            __typename
            id
            title
            path
            body { processed }
            startMonth
            endMonth
            whatsGrowing
            farmActivities
            image { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
          }
          ... on NodeRecipe {
            __typename
            id
            title
            path
            body { processed }
            prepTime
            cookTime
            servings
            ingredients
            recipeCategory {
              ... on TermRecipeCategory { name }
            }
            image { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
          }
          ... on NodeHomepage {
            __typename
            id
            title
            path
            heroTitle
            heroSubtitle
            heroDescription { processed }
            statsItems {
              ... on ParagraphStatItem {
                id
                number
                label
              }
            }
            featuredItemsTitle
            ctaTitle
            ctaDescription { processed }
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
          productCategory {
            ... on TermProductCategory { name }
          }
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
            productCategory {
              ... on TermProductCategory { name }
            }
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
          recipeCategory {
            ... on TermRecipeCategory { name }
          }
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
            recipeCategory {
              ... on TermRecipeCategory { name }
            }
            image { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
          }
        }
      }
    }
  }
`
