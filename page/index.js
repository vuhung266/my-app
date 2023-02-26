import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js with Bootstrap 4 and jQuery</title>
      </Head>
      <div className="container mt-5">
        <h1>Hello, world!</h1>
        <button type="button" className="btn btn-primary mt-3" onClick={() => {
          $('h1').fadeOut();
        }}>
          Click me to fade out the heading!
        </button>
      </div>
    </>
  )
}
