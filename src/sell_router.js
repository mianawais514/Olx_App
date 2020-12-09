
import React, { Component } from 'react';
import {BrowserRouter as Router, Route,} from "react-router-dom";
import {Sell} from'./components/sell';
import {Sell_2,Sell_item} from'./components/sell';
import Footer_forall from './components/footer_forall';
import Nav from './/components/navbar'
class Sell_router extends Component {
    state = {  }
    render() {
        return (
            
            <div id='router_main'>
                <Router>
                  <switch>
                  <Route  path='/post' component={Sell}/>
                  <Route exact path='/post' component={Sell_2}/>
                  <Route exact path='/post/attributes' component={Sell_item}/>
                  <br/>
                  </switch>
                </Router>
            </div>


        );
    }
}

export default Sell_router;