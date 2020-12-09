import React from "react";
import {BrowserRouter as Router, Route,} from "react-router-dom";
import Main_img from './components/main_img';
import Navbar_2 from "./components/navbar_2";
import Nav from './components/navbar';
import Item_detail from "./components/item_detail";
import Item_main from "./components/item_main";
import Item_img from "./components/item_img";
import {Footer_img,Footer} from './components/footer'
import Sell_router from './sell_router';
import Footer_forall from './components/footer_forall';
import {connect}from 'react-redux';


class Routerapp_2 extends React.Component{
    render(){console.log('router>>>>',this.props)
        return(
                <div id='router_main'>
            <Router>
             <switch>       
            <Route  exact path='/' component={Nav}/>
            <Route   path='/item' component={Nav}/>
            <Route exact path='/' component={Navbar_2} />
            <Route  path='/item' component={Navbar_2} />
                {/* <Route exact path='/' render={()=> <Item props={this.props}/>} /> */}
                <Route exact path='/item' component={Item_img}/>
        
                <Route exact path='/item'  component={Item_detail}/>
                <Route exact path='/' component={Main_img}/>   
                <Route exact path='/' component={Item_main}/>
                <br/>
                <Route exact path='/' component={Footer_img}/>
                <Route  path='/item' component={Footer_img}/>
                <Route exact path='/' component={Footer}/>
                <Route  path='/item' component={Footer}/>
                <Route  path='/post' component={Sell_router}/>

                {/* <Route  path='/' component={Footer_forall}/> */}
                </switch> 
            {/* <Footer/> */}
            </Router>
            
                </div>           
            
        )
    }
}


const mapStateToProps=(state)=>({
    price: state.price,
    detail: state.detail,
    img: state.img
     
    
 })
 
 // const mapDispatchToProps =(dispatch)=> ({
  
 // })
 
 
 
 
 
 
 
 export default connect(mapStateToProps,null) (Routerapp_2);
