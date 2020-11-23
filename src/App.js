import "antd/dist/antd.css";
import "./App.css";
import React from "react";
import CarwashList from "./components/CarwashList";
import CarwashSingle from "./components/CarwashSingle";
import CustomerList from "./components/CustomerList";
import CustomerSingle from "./components/CustomerSingle";
import SideBar from "./components/SideBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "leaflet/dist/leaflet.css";


export default () => {
  return (
    <div className="App">
        <BrowserRouter>
          <Route component={SideBar} />
          <Switch>
            <Route path="/carwashes" exact component={CarwashList} />
            <Route path="/carwashes/:id" exact component={CarwashSingle} />
            <Route path="/customers" exact component={CustomerList} />
            <Route path="/customers/:id" exact component={CustomerSingle} />
          </Switch>
        </BrowserRouter>
      </div>
  );
};
