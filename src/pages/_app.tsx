import { AppProps } from "next/app";
// NOTE: Do not move the styles dir to the src.
// They are used by the Static CMS preview feature.
import "../../public/styles/global.css";
import Layout from "@/src/components/Layout";
// Default theme
import '@splidejs/react-splide/css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
