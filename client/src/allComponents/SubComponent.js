import React from "react";
import { DisplayFieldSingles } from "../shared/DisplayFormComponents";
import { Header, Segment } from "semantic-ui-react";
import ProgressBar from "@ramonak/react-progress-bar";
import { Grid } from "semantic-ui-react";
import { Button } from "semantic-ui-react";

const SubComponent = (props) => {
  var header = (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div className="p-align-center">
        <br />
        <br />
        <br />
        <i class="list icon"></i>
      </div>

      <div className="p-align-center">
        <br />
        <Header style={{ marginBottom: "-5px", color: "grey" }} as="h6">
          ITOT
        </Header>
        <Header style={{ marginBottom: "-5px", color: "	#008080" }} as="h4">
          $ 283.8
        </Header>
      </div>
    </div>
  );

  return props.data.map((items) => {
    const marketValue = (str, str2) => {
      str = str.substring(1, str.length);
      return "$" + str * str2;
    };

    const removePercentage = (str) => {
      str = str.substring(0, str.length - 1);
      return str;
    };

    return (
      <>
        <Grid.Column stretched width={5}>
          <Segment attached>
            <Grid divided="vertically">
              <Grid.Row columns={3}>
                <Grid.Column>{header}</Grid.Column>

                <Grid.Column>
                  <Header
                    style={{ marginBottom: "-5px", color: "#C7EA46" }}
                    as="h2"
                  >
                    iShares
                  </Header>
                  <Header as="h6">by RCXXRCX</Header>
                  <Header
                    style={{ marginBottom: "-5px", color: "black" }}
                    as="h3"
                  >
                    S&P 500 index
                  </Header>
                  <Header
                    style={{ marginBottom: "-5px", color: "#696969" }}
                    as="h5"
                  >
                    US equity
                  </Header>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        </Grid.Column>

        <Grid.Column stretched width={3}>
          <Segment attached>
            <div className="p-grid">
              <i class="boxes icon"></i>
              <DisplayFieldSingles label="Quantity" fieldName={items.qty} />
              <i class="at icon"></i>
              <DisplayFieldSingles
                label="Avg. Cost"
                fieldName={items.avgCost}
              />
              <i class="money bill alternate outline icon"></i>
              <DisplayFieldSingles
                label="Invested Amt"
                fieldName={items.investedAmt}
              />
            </div>
          </Segment>
        </Grid.Column>
        <Grid.Column stretched width={3}>
          <Segment attached>
            <div className="p-grid">
              <DisplayFieldSingles
                label="Market value"
                fieldName={marketValue(items.price, items.qty)}
              />
              <DisplayFieldSingles
                label="% of portfolio value"
                fieldName={items.percentagePortfolio}
              />
            </div>
            <div>
              <ProgressBar
                bgcolor="#1b9a32"
                labelColor="#1b9a32"
                completed={`40`}
              />
            </div>
          </Segment>
        </Grid.Column>
        <Grid.Column stretched width={3}>
          <Segment attached>
            <div className="p-grid">
              <DisplayFieldSingles
                label="Unrealized P/L"
                fieldName={items.unrealizedPL}
              />
              <DisplayFieldSingles
                label="% of return"
                fieldName={items.percentageReturn}
              />
            </div>

            <input
              type="range"
              min="-100"
              max="100"
              value={removePercentage(items.percentageReturn)}
              className={
                removePercentage(items.percentageReturn) >= 0
                  ? "slider"
                  : "red-slider"
              }
              id="myRange2"
            />
          </Segment>
        </Grid.Column>

        <Grid.Column stretched width={2}>
          <Segment attached>
            <Button basic color="yellow">
              BUY
            </Button>
            <br />  <br /> 
            <Button basic color="yellow">
              SELL
            </Button>
          </Segment>
        </Grid.Column>
      </>
    );
  });
};
export default SubComponent;
