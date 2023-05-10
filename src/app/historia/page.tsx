import { Hero } from "./components/Hero";
import { TriangleLeft } from "../bumeranguedesign/components/TriangleLeft";
import { FounderSection } from "./components/FounderSection";
import { TriangleRight } from "../bumeranguedesign/components/TriangleRight";
import { FutureSection } from "./components/FutureSection";

export default function Historia() {
  return (
    <>
      <Hero />
      <TriangleLeft />
      <FounderSection />
      <TriangleRight />
      <FutureSection />
    </>
  );
}
