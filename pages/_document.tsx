import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:500,700" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Muli:400,400i,800,800i" />
        <script src="https://use.fontawesome.com/releases/v5.15.3/js/all.js" crossOrigin="anonymous" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
