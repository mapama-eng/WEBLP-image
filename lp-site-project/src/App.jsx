import {
  BenefitFooter,
  ContactStrip,
  FaqPanel,
  FeaturePanel,
  Header,
  Hero,
  PricingPanel,
  ProcessPanel,
} from "./components.jsx";
import { useEffect } from "react";
import initScrollAnimations from "./animations.js";

export default function App() {
  useEffect(() => initScrollAnimations(), []);

  return (
    <div className="lp-shell">
      <Header />
      <main>
        <Hero />
        <FeaturePanel />
        <ProcessPanel />
        <PricingPanel />
        <FaqPanel />
        <ContactStrip />
      </main>
      <BenefitFooter />
    </div>
  );
}
