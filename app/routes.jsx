// Include the React library
import React from "react";
var router = require("react-router");
var Route = router.Route;
var IndexRoute = router.IndexRoute;
var Router = router.Router;
var hashHistory = router.hashHistory;
var Frame = require("./Frame.jsx").default;
var Home = require("./Home.jsx").default;
var Ads = require("./Ads.jsx").default;
// var Results = require("../components/Results.jsx");

module.exports = (

    <Router history={hashHistory}>
    <Route path="/" component={Frame} >
     
      <Route path="/Home" component={Home} />
      <Route path="/Ads" component={Ads} />
        
       <IndexRoute component={Home} />

    </Route>
   </Router> 
);