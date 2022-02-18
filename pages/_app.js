import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className='appContainer'>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
