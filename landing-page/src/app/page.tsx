import AboutUs from "@/components/custom/landing-page/AboutUs";
import Header from "@/components/custom/landing-page/Header";
import Hero from "@/components/custom/landing-page/Hero";
import Footer from "@/components/custom/landing-page/Footer";
import OurTeam from "@/components/custom/landing-page/OurTeam";

export default function Home() {
  return (
      <>
        <Header/>
        <main>
          <Hero/>

          <AboutUs/>

          <section id="solution">

          </section>
          
          <section id="architecture">

          </section>
          
          <OurTeam/>
        </main>
        <Footer />
      </>
  )
}