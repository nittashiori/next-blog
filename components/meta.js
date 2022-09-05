import Head from "next/head"

// サイトに関する情報
import { siteMeta } from "lib/constants"
const { siteTitle, siteDesc, siteUrl, siteLocale, siteType, siteIcon } = siteMeta

export default function Meta({ pageTitle, pageDesc }) {
  // ページのタイトル（ページタイトルが未指定な場合の処理を指定する）
  const title = pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle
  // ページの説明
  const desc = pageDesc ?? siteDesc

  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="description" content={desc} />
      <meta property="og:description" content={desc} />
    </Head>
  )
}