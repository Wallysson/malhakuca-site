import { AboutBume } from "./components/AboutBume";
import { Crowdfunding } from "./components/Crowdfunding";
import { Guiness } from "./components/Guiness";
import { Hero } from "./components/Hero";
import { Relevance } from "./components/Relevance";
import { Wave } from "./components/Wave";

export default function BumerangueDesign() {
    return (
      <>
        <Hero />
        <AboutBume />
        <Wave />
        <Relevance />
        <Guiness />
        <Crowdfunding />
      </>
    );
  }
  