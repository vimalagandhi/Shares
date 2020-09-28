import React, { useState, useContext } from "react";
import classNames from "classnames";
import { Route, Switch } from "react-router-dom";
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "./layout/layout.css";
import "./App.css";
import { EnumContext } from "./context/EnumContext";
import MainComponent from "./allComponents/MainComponent";
import "semantic-ui-css/semantic.min.css";

const App = () => {
  
  const [layoutMode, setLayoutMode] = useState("static");
  const [staticMenuInactive, setStaticMenuInactive] = useState(false);
  const [overlayMenuActive, setOverlayMenuActive] = useState(false);
  const [mobileMenuActive, setMobileMenuActive] = useState(false);
  const {
    appMenu
  } = useContext(EnumContext);

  const onWrapperClick = (event) => {
    if (!event.menuClick) {
      setOverlayMenuActive(false);
      setMobileMenuActive(false);
    }
    event.menuClick = false;
  };

  let wrapperClass = classNames("layout-wrapper", {
    "layout-overlay": layoutMode === "overlay",
    "layout-static": layoutMode === "static",
    "layout-static-sidebar-inactive":
      staticMenuInactive && layoutMode === "static",
    "layout-overlay-sidebar-active":
      overlayMenuActive && layoutMode === "overlay",
    "layout-mobile-sidebar-active": mobileMenuActive,
  });
  
  return (
    <div className={wrapperClass} onClick={onWrapperClick}>
        <Switch>
          <Route path="/" exact component={MainComponent} />
        </Switch>
    </div>
  );
};

export default App;
