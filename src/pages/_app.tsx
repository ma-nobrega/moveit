import Global from '../styles/GlobalStyle';

import { ChallengesProvider } from '../contexts/ChallengesContext';
import { useState } from 'react';

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
