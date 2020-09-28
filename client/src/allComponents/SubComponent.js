import React from "react";
import { DisplayFieldSingles } from "../shared/DisplayFormComponents";
import { Grid } from "semantic-ui-react";
import { Button } from "semantic-ui-react";
import Progress from "react-progressbar";
import Slider from "@material-ui/core/Slider";
import { withStyles } from "@material-ui/core/styles";
import { Card } from "primereact/card";

const SubComponent = (props) => {
  function AirbnbThumbComponent(props) {
    return (
      <span {...props}>
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </span>
    );
  }

  const AirbnbSliderRight = withStyles({
    root: {
      color: "green",
      height: 3,
      padding: "13px 0",
    },
    track: {
      height: 3,
    },
    rail: {
      color: "#d8d8d8",
      opacity: 1,
      height: 3,
    },
  })(Slider);

  const AirbnbSlider = withStyles({
    root: {
      color: "red",
      height: 3,
      padding: "13px 0",
    },
    track: {
      height: 3,
    },
    rail: {
      color: "#d8d8d8",
      opacity: 1,
      height: 3,
    },
  })(Slider);

  return props.data.map((items) => {
    const marketValue = (str, str2) => {
      str = str.substring(1, str.length);
      return "$" + str * str2;
    };

    const removePercentage = (str) => {
      str = str.substring(0, str.length - 1);
      return str;
    };

    const returnValue = (str) => {
      let convertedStr = str.substring(0, str.length - 1);
      let x = convertedStr / 2;
      let y = x >= 0 ? x + 50 : 50 - x;
      return y;
    };

    return (
      <>
        <Grid.Column stretched width={5}>
          <Card
            style={{
              width: "29.5rem",
              height: "115px",
              backgroundColor: "#eaeaea",
              marginBottom: "-1.5em",
            }}
          >
            <Grid divided="vertically">
              <Grid.Row columns={3}>
                <Grid.Column>
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
                      <i class="list icon"></i>
                    </div>
                    <div className="p-align-center">
                      <h6
                        style={{ fontWeight: "bold", marginBottom: "-1.5em" }}
                      >
                        {items.scrip}
                      </h6>
                      <h3 style={{ color: "#00ABF0", marginBottom: "-1.5em" }}>
                        $ 50.3
                      </h3>
                    </div>
                  </div>
                </Grid.Column>
                <Grid.Column>
                  <h3 style={{ color: "#96CC39", marginBottom: "0em" }}>
                    iShares
                  </h3>
                  <span
                    style={{
                      color: "black",
                      marginBottom: "-2em",
                      display: "block",
                      marginLeft: 30,
                    }}
                  >
                    <small>by RcxRcv</small>
                  </span>
                  <h4 style={{ color: "black", marginBottom: "-1.5em" }}>
                    S&P 500 index
                  </h4>
                  <h4 style={{ color: "#696969", marginBottom: "-1.5em" }}>
                    US equity
                  </h4>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Card>
        </Grid.Column>

        <Grid.Column stretched width={3}>
          <Card
            style={{
              width: "17.5rem",
              height: "115px",
              backgroundColor: "#eaeaea",
              marginBottom: "-1.5em",
            }}
          >
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
          </Card>
        </Grid.Column>
        <Grid.Column stretched width={3}>
          <Card
            style={{
              width: "17.5rem",
              height: "115px",
              backgroundColor: "#eaeaea",
              marginBottom: "-1.5em",
            }}
          >
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
              <Progress
                style={{ backgroundColor: "#DCDCDC" }}
                completed={removePercentage(items.percentagePortfolio)}
              />
            </div>
          </Card>
        </Grid.Column>
        <Grid.Column stretched width={3}>
          <Card
            style={{
              width: "17.5rem",
              height: "115px",
              backgroundColor: "#eaeaea",
              marginBottom: "-1.5em",
            }}
          >
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

            {removePercentage(items.percentageReturn) >= 0 ? (
              <AirbnbSliderRight
                ThumbComponent={AirbnbThumbComponent}
                getAriaLabel={(index) =>
                  index === 0 ? "Minimum price" : "Maximum price"
                }
                defaultValue={[50, returnValue(items.percentageReturn)]}
              />
            ) : (
              <AirbnbSlider
                ThumbComponent={AirbnbThumbComponent}
                getAriaLabel={(index) =>
                  index === 0 ? "Minimum price" : "Maximum price"
                }
                defaultValue={[50, returnValue(items.percentageReturn)]}
              />
            )}
          </Card>
        </Grid.Column>
        <Grid.Column stretched width={2}>
          <Card
            style={{ width: "7rem", height: "115px", marginBottom: "-1.5em" }}
          >
            <Button basic color="yellow">
              BUY
            </Button>
            <br /> <br />
            <Button basic color="yellow">
              SELL
            </Button>
          </Card>
        </Grid.Column>
      </>
    );
  });
};
export default SubComponent;
