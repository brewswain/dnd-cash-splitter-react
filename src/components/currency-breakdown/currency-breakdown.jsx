import React from "react";

import "./currency-breakdown.styles.scss";

const CurrencyBreakdown = () => (
  <div className="divided-amount">
    {convertedCopper
      ? `Everybody gets ${convertedPlatinum} platinum, ${convertedGold} gold, ${convertedSilver} silver, and ${copperAfterSilver} copper, with ${leftOver} copper remaining.`
      : ""}
    ; }
  </div>
);

export default CurrencyBreakdown;
