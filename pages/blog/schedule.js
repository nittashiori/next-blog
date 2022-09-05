import { client } from "lib/api"

export default function Schedule() {
  return <h1>記事のタイトル</h1>
}

export async function getStaticProps() {
  const resPromise = client.get({
    endpoint: "blogs",
  })
  // Promiseオブジェクト
  // resPromise.then((res) => console.log(res)).catch((err) => console.log(err))
  
  // await式 Promiseよりもシンプルに記述できる
  try {
    const res = await resPromise
    console.log(res)
  } catch(err) {
    console.log(err)
  }

  return {
    props: {},
  }
}