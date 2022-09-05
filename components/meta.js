import Head from "next/head"

// サイトに関する情報
import { siteMeta } from "lib/constants"
const { siteTitle, siteDesc, siteUrl, siteLocale, siteType, siteIcon } = siteMeta

export default function Meta({ pageTitle }) {
  // ページのタイトル（ページタイトルが未指定な場合の処理を指定する）
  const title = pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle

  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />
    </Head>
  )
}