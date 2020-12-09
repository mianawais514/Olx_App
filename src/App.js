import React from 'react';
import './App.css';
import main_img from './components/main_img';
import Routerapp_2 from './router_item';
import {BrowserRouter as Router, Route,} from "react-router-dom";
import Footer_forall from './components/footer_forall'


class App extends React.Component{
render(){
  return(
    <div >
      <Routerapp_2/>
  
    <Footer_forall/>
      </div>
  )
}
}

export default App;