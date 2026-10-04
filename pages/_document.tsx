import { Html, Head, Main, NextScript } from 'next/document'

// Marks the page as JS-capable, then flags when Archivo has loaded so the
// hero name's width animation starts with the real font, not the fallback.
// The 800ms cap keeps the name and photo from waiting long on slow connections.
const fontGate = `(function(d){d.classList.add('js');var done=function(){d.classList.add('is-loaded')};setTimeout(done,800);if(document.fonts&&document.fonts.load){document.fonts.load('800 1em Archivo','Natemanee').then(done,done)}})(document.documentElement)`

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,400..800&display=swap"
        />
        <script dangerouslySetInnerHTML={{ __html: fontGate }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
