import SEO from "../next-seo.config";

import CommandBarInvoker from "@/components/Common/CommandBarInvoker";
import CustomToaster from "@/components/Common/CustomToaster";
import Footer from "@/components/Common/Footer";
import Header from "@/components/Common/Header";
import KProvider from "@/components/Common/KProvider";
import { DefaultSeo, SocialProfileJsonLd } from "next-seo";
import type { AppProps } from "next/app";
import Script from "next/script";
import NextNProgress from "nextjs-progressbar";
import useCircles from "store/circles";

import "@fontsource/sen";
import "@fontsource/syncopate";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  const { isEnabled } = useCircles();

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Header />
      <KProvider>
        <NextNProgress
          color="#A0A0A0"
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
          options={{ showSpinner: false }}
        />
        <DefaultSeo {...SEO} />
        <SocialProfileJsonLd
          type="Person"
          name={process.env.NEXT_PUBLIC_PORTFOLIO_NAME}
          url={process.env.NEXT_PUBLIC_PORTFOLIO_URL}
          sameAs={[
            `${process.env.NEXT_PUBLIC_LINKEDIN_URL}`,
            `${process.env.NEXT_PUBLIC_GITHUB_URL}`,
          ]}
        />
        {process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL &&
          process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID && (
            <Script
              src={process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL}
              data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
              strategy="lazyOnload"
            />
          )}
        <main id="main" className="relative mx-auto mb-16 max-w-4xl px-8">
          <Component {...pageProps} />
          <CustomToaster />
          {isEnabled && (
            <div className="absolute left-0 right-0 top-0">
              <div className="absolute left-8 top-16 -z-10 overflow-visible opacity-20">
                <div className="circle-1 -z-10 h-[400px] w-[700px] rounded-full bg-red-700 mix-blend-multiply blur-[128px]" />
              </div>
              <div className="absolute left-10 top-32 -z-10 overflow-visible opacity-20">
                <div className="circle-2 -z-10 h-[400px] w-[700px] rounded-full bg-green-700 mix-blend-multiply blur-[128px]" />
              </div>
              <div className="absolute left-12 top-48 -z-10 overflow-visible opacity-20">
                <div className="circle-3 -z-10 h-[600px] w-[500px] rounded-full bg-blue-700 mix-blend-multiply blur-[128px]" />
              </div>
            </div>
          )}
        </main>
        <Footer />
        <CommandBarInvoker />
      </KProvider>
    </div>
  );
}
