import { notFound } from "next/navigation"
import { chefs } from "../chefsData"
import ChefProfileClient from "./ChefProfileClient"
export function generateStaticParams() { return chefs.map(c => ({ slug: c.slug })) }
export default async function ChefPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const chef = chefs.find(c => c.slug === slug)
  if (!chef) notFound()
  const i = chefs.findIndex(c => c.slug === slug)
  const prev = i > 0 ? chefs[i-1] : null
  const next = i < chefs.length-1 ? chefs[i+1] : null
  return <ChefProfileClient chef={chef} prevChef={prev} nextChef={next} allChefs={chefs} />
}
