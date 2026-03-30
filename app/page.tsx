import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Athletes from "@/components/Athletes";
import Results from "@/components/Results";
import Coach from "@/components/Coach";
import Training from "@/components/Training";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <About />
        <Athletes />
        <Results />
        <Coach />
        <Training />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
