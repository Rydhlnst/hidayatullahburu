import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { VisiMisi } from "@/components/visi-misi";
import { Curriculum } from "@/components/curriculum";
import { Institutions } from "@/components/institutions";
import { WhyChooseUs } from "@/components/why-choose-us";
import { Gallery } from "@/components/gallery";
import { MapLocation } from "@/components/map-location";
import { Testimonials } from "@/components/testimonials";
import { CTA } from "@/components/cta";
import { Articles } from "@/components/articles";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <VisiMisi />
        <Curriculum />
        <Institutions />
        <WhyChooseUs />
        <Gallery />
        <MapLocation />
        <Testimonials />
        <CTA />
        <Articles />
      </main>
      <Footer />
    </>
  );
}
