import { About } from "../components/About";
import { Challenges } from "../components/Challenges";
import { Donate } from "../components/Donate";
import { Goals } from "../components/Goals";
import { Hero } from "../components/Hero";

export default function Initial() {
  return (
    <>
      <Hero />
      <About />
      <Goals />
      <Challenges />
      <Donate />
    </>
  );
}
