import Head from "next/head";
import Script from "next/script";
import { getFileContent } from "@/src/lib/server";
import LandingSecond from "@/src/components/LandingSecond";
import LandingThird from "@/src/components/LandingThird";
import LandingFirst from "../components/LandingFirst";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import { Hero } from "../components/Hero";

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
  },
  thirdSection: {
    images: string[];
    subTitle: string;
    title: string;
    intro: string;
    list: [
      { title: string; body: string; }
    ]
  },
}

export async function getStaticProps() {
  const heroData = getFileContent("content/hero.yml")
  const firstSectionData = getFileContent("content/landing_first.yml")
  const secondSectionData = getFileContent("content/landing_second.yml")
  const thirdSectionData = getFileContent("content/landing_third.yml")

  return {
    props: {
      hero: heroData as LandingPageProps["hero"],
      firstSection: firstSectionData as LandingPageProps["firstSection"],
      secondSection: secondSectionData as LandingPageProps["secondSection"],
      thirdSection: thirdSectionData as LandingPageProps["thirdSection"]
    }
  }
}

export default function Index({hero, firstSection, secondSection, thirdSection}: LandingPageProps) {
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
      <LandingFirst {...firstSection} />
      <LandingSecond {...secondSection} />
      <LandingThird {...thirdSection} />
    </>
  );
}
