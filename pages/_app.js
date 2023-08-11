import Head from 'next/head';

import { ChakraProvider } from '@chakra-ui/react';
import { Global, css } from '@emotion/react';

const GlobalStyle = ({ children }) => {

  return (
    <>
      <Global
        styles={css`
          ::selection {
            background-color: #90CDF4;
            color: #fefefe;
          }
          ::-moz-selection {
            background: #ffb7b7;
            color: #fefefe;
          }
          html {
            min-width: 800px;
            scroll-behavior: smooth;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
        `}
      />
      {children}
    </>
  )
}

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
       <GlobalStyle>
        <Head>
          <link rel="shortcut icon" href="/images/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </GlobalStyle>
    </ChakraProvider>
  )
}

export default MyApp