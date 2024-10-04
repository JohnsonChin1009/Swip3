import AboutUs from "@/components/custom/AboutUs";
import Header from "@/components/custom/Header";
import Hero from "@/components/custom/Hero";
import Footer from "@/components/custom/Footer";
import OurTeam from "@/components/custom/OurTeam";

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