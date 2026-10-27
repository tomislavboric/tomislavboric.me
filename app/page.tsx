import SkipLink from "@/components/SkipLink";
import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import About from "@/components/About";
import Contact from "@/components/Contact";
import SiteFooter from "@/components/SiteFooter";

export default function HomePage() {
  return (
    <>
      <SkipLink />
      <SiteHeader />
      <main id="main">
        <Hero />
        <Work />
        <About />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
