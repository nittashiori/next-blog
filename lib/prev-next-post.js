export function prevNextPost(allSlugs, currentSlug) {
  // 記事の総数
  const numberOfPosts = allSlugs.length
  // 記事のインデックス
  const index = allSlugs.findIndex(
    ({ slug }) => slug === currentSlug
  )

  // 前の記事データをセット、ただし現在の記事が配列の最後の記事の場合はtitleとslugを空にする
  const prevPost = index + 1 === numberOfPosts ? { title: "", slug: "" } : allSlugs[index + 1]
  // 次の記事データをセット、以下略
  const nextPost = index === 0 ? { title: "", slug: "" } : allSlugs[index - 1]

  return [prevPost, nextPost]
}