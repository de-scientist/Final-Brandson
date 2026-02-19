export const pageHeroQuery = `
  *[_type == "pageHero" && pageKey == $pageKey][0] {
    _id,
    title,
    subtitle,
    backgroundImage,
    ctaText,
    ctaLink
  }
`

export const servicesWithCategoriesQuery = `
  *[_type == "service"] {
    _id,
    title,
    description,
    category->{
      _id,
      name,
      slug
    },
    image,
    price,
    featured
  }
`

export const blogPostsQuery = `
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    author->{
      name,
      image
    },
    mainImage,
    categories[]->{
      title,
      slug
    }
  }
`

export const blogPostBySlugQuery = `
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    publishedAt,
    author->{
      name,
      image,
      bio
    },
    mainImage,
    body,
    categories[]->{
      title,
      slug
    }
  }
`
