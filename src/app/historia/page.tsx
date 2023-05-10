import { Hero } from "./components/Hero";
import { TriangleLeft } from "../bumeranguedesign/components/TriangleLeft";
import { TriangleRight } from "../bumeranguedesign/components/TriangleRight";
// import Carousel from "./components/Carousel";
import FounderSection from "./components/FounderSection";
import FutureSection from "./components/FutureSection";
import { IMAGE_CAROUSEL } from "../helpers/image-carousel";

export default function Historia() {
  return (
    <>
      <Hero />
      {/* <Carousel images={IMAGE_CAROUSEL}/> */}
      <TriangleLeft />
      <FounderSection />
      <TriangleRight />
      <FutureSection />
    </>
  );
}
