import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/icons/logo.svg" type="image/x-icon" />
        <title>Scratchpay | Dashboard</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          name="description"
          content={`Scratchpay code Challenge by Lars Santura`}
        />
        <meta name="viewport" content="width-device-width,initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
