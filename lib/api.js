import { createClient } from "microcms-js-sdk"

export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN,
  apiKey: process.env.API_KEY,
})

export async function getPostBySlug(slug) {
  try {
    const post = await client.get({
      endpoint: "blogs",
      queries: { filters: `slug[equals]${slug}` },
    })
    return post.contents[0]
  } catch(err) {
    console.log("~~ getPostBySlug ~~")
    console.log(err)
  }
}

// ページネーションに表示する項目（タイトル・スラッグ）を取得
export async function getAllSlugs(limit = 100) {
  try {
    const slugs = await client.get({
      endpoint: "blogs",
      queries: { fields: "title,slug", orders: "-publishDate", limit: limit }
    })
    return slugs.contents
  } catch(err) {
    console.log("~~ getAllSlugs ~~")
    console.log(err)
  }
}

// 記事一覧に表示する項目（タイトル・スラッグ・アイキャッチ）を取得
export async function getAllPosts(limit = 100) {
  try {
    const posts = await client.get({
      endpoint: "blogs",
      queries: {
        fields: "title,slug,eyecatch",
        orders: "-publishDate",
        limit: limit
      }
    })
    return posts.contents
  } catch(err) {
    console.log("~~ getAllPosts ~~")
    console.log(err)
  }
}