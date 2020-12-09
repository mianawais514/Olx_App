import React from 'react';
import '../App.css';
import {Link} from "react-router-dom";
import{facebook_login} from "../store/action"
// import {olx}from '../images/olx.png';
import {connect}from 'react-redux';
class Nav extends React.Component{
render(){
  console.log("history>>",this.props.users)
let button;
  if (this.props.users.name==undefined) {

    button=<div id='login_div'>
    <a onClick={()=>this.props.facebook(this.props.history)}>login</a>
    </div>
    
  } else {
  
  button=<div id='login_div'>
    <img id='login_pic' src={this.props.users.profile}/>
   <p id='login_name'>{this.props.users.name}</p>
   </div>
  }
  return(
<div id='header'>
 <div id='flex_1'>

<img src={require("../images/olx.png")} />

 </div>
<div id='flex_2'>
 <span class="icon-search icon_1" ></span>
  <input placeholder='Search'/>
<span class="icon-chevron-down icon_2" ></span> 
</div >
<div id='flex_3'>
<input placeholder='Search' />
<div id='flex_3_div'>
<span class="icon-search "></span>
</div>
</div>
<div id='flex_4'>
  <button className='sell_b' onClick={()=>{this.props.history.push('/post')}} >+ SELL</button>
  
 
   {button}

 {/* <img id='login_pic' src="https://graph.facebook.com/2721815034699353/picture"/>
 <p id='login_name'> Mian awais</p> */}
 
</div>
</div>

)
}
}


const mapStateToProps=(state)=>({
users: state.users_login
   
  
})

const mapDispatchToProps =(dispatch)=> ({
 facebook: (history)=> dispatch(facebook_login(history)),
})







export default connect(mapStateToProps,mapDispatchToProps) (Nav);