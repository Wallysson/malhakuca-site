import { About } from "./components/About";
import { Challenges } from "./components/Challenges";
import { Footer } from "./components/Footer";
import { Goals } from "./components/Goals";
import { Hero } from "./components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Goals />
      <Challenges />
      <Footer />
    </>
  );
}
