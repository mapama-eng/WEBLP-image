import {
  BenefitFooter,
  ContactStrip,
  FaqPanel,
  FeaturePanel,
  Header,
  Hero,
  OpeningMovie,
  PrPanel,
  PricingPanel,
  ProcessPanel,
  RecruitPanel,
} from "./components.jsx";
import { useEffect } from "react";
import initScrollAnimations from "./animations.js";

export default function App() {
  useEffect(() => initScrollAnimations(), []);

  return (
    <div className="lp-shell">
      <Header />
      <main>
        <OpeningMovie />
        <Hero />
        <FeaturePanel />
        <ProcessPanel />
        <PricingPanel />
        <RecruitPanel />
        <PrPanel />
        <FaqPanel />
        <ContactStrip />
      </main>
      <BenefitFooter />
    </div>
  );
}
