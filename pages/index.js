function Decoration({ children }) {
  return (
    <div style={{ color: "red" }}>
      { children }
    </div>
  )
}

export default function Home() {
  return (
    <>
      <header>HEADER</header>

      <main>
        <Decoration>
          <h1>CUBE</h1>
          <p>アウトプットしていくサイト</p>
        </Decoration>
      </main>

      <footer>FOOTER</footer>
    </>
  )
}