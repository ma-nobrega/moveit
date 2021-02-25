import Global from '../styles/GlobalStyle';

import { ChallengesProvider } from '../contexts/ChallengesContext';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Global />
      <ChallengesProvider>
          <Component {...pageProps} />
      </ChallengesProvider>
    </>
  )
}

export default MyApp
