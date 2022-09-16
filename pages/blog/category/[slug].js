import { getAllCategories } from "lib/api"
import Conteiner from "components/container"
import PostHeader from "components/post-header"

export default function Category({name}) {
  return (
    <Conteiner>
      <PostHeader title={name} subtitle="Blog Category" />
    </Conteiner>
  )
}

export async function getStaticPaths() {
  const allCats = await getAllCategories()
  return {
    paths: allCats.map(({ slug }) => `/blog/category/${slug}`),
    fallback: false
  }
}

export async function getStaticProps(context) {
  const catSlug = context.params.slug

  const allCats = await getAllCategories()
  const cat = allCats.find(({ slug }) => slug === catSlug)

  return {
    props: {
      name: cat.name
    }
  }
}