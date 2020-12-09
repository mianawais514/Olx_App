import React from 'react';
import {Link} from "react-router-dom";
class Navbar_2 extends React.Component{
    
    render(){
        const categray=[
            {id:'1',label:'Mobile Phones'},
            {id:'2',label:'Car'},
            {id:'3',label:'Motorcycles'},
            {id:'4',label:'Houses'},
            {id:'5',label:'Tv-Video_Audio'},
            {id:'6',label:'Tablets'},
            {id:'7',label:'Land & plots'}

        ];
        
        return(
            <div id='header_2'>

               <div id='all_cat'> 
                   <p id='all_cat_1'>ALL CATEGORIES</p> 
                   
               </div>

               <div id='link'>
             {categray.map((item)=>{return (<Link id='link_1' to='/'>{item.label}</Link>)})}
               </div>


                        




            </div>
        )
    }
}
export default Navbar_2;