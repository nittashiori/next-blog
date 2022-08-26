function EachPost({ title, url }) {
  return (
    <article>
      <a href={url}>
        <h3>{title}</h3>
      </a>
    </article>
  )
}

export default function Posts() {
  const props1 = { title: "記事のタイトル1", url: "post1.html" }
  const props2 = { title: "記事のタイトル2", url: "post2.html" }

  return (
    <section>
      <h2>おすすめ記事</h2>
      <EachPost {...props1} />
      <EachPost {...props2} />
    </section>
  )
}