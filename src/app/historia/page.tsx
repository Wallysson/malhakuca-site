import { Hero } from "./components/Hero";
import { TriangleLeft } from "../bumeranguedesign/components/TriangleLeft";
import { TriangleRight } from "../bumeranguedesign/components/TriangleRight";
import FounderSection from "./components/FounderSection";
import FutureSection from "./components/FutureSection";
import ImageCarousel from "../components/ImageCarousel";
import BumerangueSection from "./components/BumerangueSection";

export default function Historia() {
  return (
    <div>
      <Hero />
      <ImageCarousel />
      <BumerangueSection />
      <TriangleLeft />
      <FounderSection />
      <TriangleRight />
      <FutureSection />
    </div>
  );
}
