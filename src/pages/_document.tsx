import {Head, Html, Main, NextScript} from 'next/document';

export default function Document() {
  return (
    <Html lang="de">
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" async />
        <link rel="icon" type="image/png" href="favicon.png" sizes="56x56" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
