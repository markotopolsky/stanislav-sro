import data from './produkty.json'

export type Category = {
  slug: string
  name: string
}

export type Product = {
  slug: string
  name: string
  price: number
  category: string
  image: string
}

export const categories: Category[] = data.categories
export const products: Product[] = data.products

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug)
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.category === categorySlug)
}
