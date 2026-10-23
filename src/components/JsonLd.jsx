

/** JSON-LD injected once per page type */
export default function JsonLd({ data }) {
  if (!data) return null
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  )
}

export const organizationLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Tujo Logistics',
  url: 'https://tujologistics.com',
  logo: 'https://tujologistics.com/tujo-logo.png',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bogotá',
    addressCountry: 'CO',
  },
  sameAs: [],
  description:
    'Coordinación logística desde Bogotá. Sistemas de organización compleja impulsados por IA, ciencia y tecnología.',
}

export function faqLd(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((i) => ({
      '@type': 'Question',
      name: i.q,
      acceptedAnswer: { '@type': 'Answer', text: i.a },
    })),
  }
}

export function articleLd(post, url) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title.es,
    description: post.excerpt.es,
    datePublished: post.date,
    image: post.image,
    inLanguage: 'es-CO',
    author: { '@type': 'Organization', name: 'Tujo Logistics' },
    publisher: { '@type': 'Organization', name: 'Tujo Logistics', logo: { '@type': 'ImageObject', url: 'https://tujologistics.com/tujo-logo.png' } },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  }
}

export const websiteLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Tujo Logistics',
  url: 'https://tujologistics.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://tujologistics.com/blog?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
}
