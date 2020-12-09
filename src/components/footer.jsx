import React, { Component } from 'react';
import {Link} from "react-router-dom";
class Footer_img extends Component {
    state = {  }
    render()
    {
        
        return (
          

              <div id='footer_img'>
              
              
              





              <img src={require('../images/pic_3.jpg')}/>
 

             <div id='footer_img_inner_1'>
                <span>
                Try the olx app
                </span>
                <p>
                <br/>
                Buy, sell and find just about anything using the app on your mobile.
                </p>
             </div>
              
                 
               
             <div id='footer_img_inner_2'>

                <span>
                Get your app today 
                </span>

                <div id='footer_img_inner_2_inner'>
                <img src={require('../images/pic_4.jpg')}/>
                <img src={require('../images/pic_5.jpg')}/>
                </div>
                
             </div>



              
              
               </div> 
               

              
        );
    }
}





// import React, { Component } from 'react';
class Footer extends Component {
    state = {  }
    render() {
        return (
            <div id='footer_main'>



             <div id='footer_main_inner_1'>
                 <span>Popular Categories</span>
                 <p>Cars</p>
                 <p>Flats for rent</p>
                 <p>Jobs</p>
                 <p>Mobile Phone</p>
             </div>


             <div id='footer_main_inner_2'>
             <span>trendeing search</span>
                 <p>Bikes</p>
                 <p>Watches</p>
                 <p>Books</p>
                 <p>Dogs</p>
             </div>


             <div id='footer_main_inner_3'>
             <span>about us</span>
                 <p>About OLX Group</p>
                 <p>OLX Blog</p>
                 <p>Contact Us</p>
                 <p>OLX for Businesses</p>
             </div>


             <div id='footer_main_inner_4'>
                <span>olx</span>
                 <p>Help</p>
                 <p>Sitemap</p>
                 <p>Legal & Privacy informatio</p>
             </div>


             <div id='footer_main_inner_5'>
                 <span>Follow US</span>
                 
             </div>



             
            </div>
        );
    }
}




export  { Footer_img,Footer};