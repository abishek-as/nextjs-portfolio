//Components
import About from "@/components/About";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Contact from "./contact/page";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      {/* <Services /> */}
      {/* <Work /> */}
      <Work />
      {/* <Reviews /> */}
      {/* <Cta /> */}
      <Contact />
    </main>
  );
}
