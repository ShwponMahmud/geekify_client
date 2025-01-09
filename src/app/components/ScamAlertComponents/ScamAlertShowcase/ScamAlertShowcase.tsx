import React from "react";
import "./ScamAlertShowcase.css";
import Showcase from "../../Showcase/Showcase";

function ScamAlertShowcase() {
  return (
    <div>
      <Showcase
        backgroundImage={"/scam-alert-banner.jpg"}
        title="Scam"
        highlights="Alert"
        paragraph="Online scams are on the rise, targeting unsuspecting individuals and businesses alike. Stay informed and vigilant with Geekify’s tips on identifying, avoiding, and reporting scams. 
          Together, we can keep your digital presence secure."
      />
    </div>
  );
}

export default ScamAlertShowcase;
