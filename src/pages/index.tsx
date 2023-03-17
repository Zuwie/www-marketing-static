import Head from "next/head";
import Script from "next/script";
import AboutSecond from "@/src/components/AboutSecond";
import { getFileContent } from "@/src/lib/server";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import { Hero } from "../components/Hero";
import About from "../components/About";

interface LandingPageProps {
  hero: {
    banner: string;
    title: string;
    intro: string;
  },
  firstSection: {
    images: string[];
    subTitle: string;
    title: string;
    intro: string;
    list: [
      { title: string; body: string; }
    ]
  },
  secondSection: {
    images: string[];
    subTitle: string;
    title: string;
    intro: string;
    list: [
      { title: string; body: string; }
    ]
  }
}

export async function getStaticProps() {
  const heroData = getFileContent("content/hero.yml")
  const firstSectionData = getFileContent("content/landing_first.yml")
  const secondSectionData = getFileContent("content/landing_second.yml")

  return {
    props: {
      hero: heroData as LandingPageProps["hero"],
      firstSection: firstSectionData as LandingPageProps["firstSection"],
      secondSection: secondSectionData as LandingPageProps["secondSection"]
    }
  }
}

export default function Index({hero, firstSection, secondSection}: LandingPageProps) {
  return (
    <>
      <Head>
        <title>Wiener Würfel Wappler</title>
      </Head>
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" async/>
      <BasicMeta url="/"/>
      <OpenGraphMeta url="/"/>
      <TwitterCardMeta url="/"/>

      <Hero banner={hero.banner} title={hero.title} intro={hero.intro}/>
      <About {...firstSection} />
      <AboutSecond {...secondSection} />
    </>
  );
}
