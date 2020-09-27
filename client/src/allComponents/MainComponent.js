import React from "react";
import { Grid } from "semantic-ui-react";
import SubComponent from "./SubComponent";

const MainComponent = (props) => {
  const allData = [
    {
      scrip: "AADR",
      qty: 430,
      price: `$50.30`,
      avgCost: `$41.75`,
      investedAmt: `$17952.07`,
      percentagePortfolio: `22.06%`,
      unrealizedPL: `$3676.93`,
      percentageReturn: `20.48%`,
    },
    {
      scrip: "MFEM",
      qty: 210,
      price: `$23.20`,
      avgCost: `22.50`,
      investedAmt: `$4725.84`,
      percentagePortfolio: `5.81%`,
      unrealizedPL: `$146.16`,
      percentageReturn: `3.09%`,
    },
    {
      scrip: "JPEM",
      qty: 328,
      price: `$52.50`,
      avgCost: `56.70`,
      investedAmt: `$18597.60`,
      percentagePortfolio: `22.86%`,
      unrealizedPL: `-$1377.60`,
      percentageReturn: `-7.41%`,
    },
    {
      scrip: "KEMQ",
      qty: 801,
      price: `$20.40`,
      avgCost: `22.24`,
      investedAmt: `$17811.04`,
      percentagePortfolio: `21.89%`,
      unrealizedPL: `-$1470.64`,
      percentageReturn: `-8.26%`,
    },
    {
      scrip: "KLDW",
      qty: 523,
      price: `$32.90`,
      avgCost: `26.32`,
      investedAmt: `$13765.36`,
      percentagePortfolio: `16.92%`,
      unrealizedPL: `$3441.34`,
      percentageReturn: `25.00%`,
    },
    {
      scrip: "KOIN",
      qty: 335,
      price: `$25.40`,
      avgCost: `25.40`,
      investedAmt: `$8509.00`,
      percentagePortfolio: `10.46%`,
      unrealizedPL: `$-`,
      percentageReturn: `0.00%`,
    },
  ];

  return (
    <>
      <segment>
        <Grid>
          <SubComponent data={allData} />
        </Grid>
      </segment>
    </>
  );
};

export default MainComponent;
