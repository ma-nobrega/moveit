import Global from '../styles/GlobalStyle';

function MyApp({ Component, pageProps }) {
  return(
    <>
      <Global/>
      <Component {...pageProps} />
    </>
  ) 
}

export default MyApp
