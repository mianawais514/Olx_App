import React,{Component}from 'react';
// import {Link} from "react-router-dom";
import {connect}from 'react-redux';

class Item_detail extends Component{
    

    render(){
        
       
       
            
            // localStorage.setItem('price',this.props.price)
       
        
    //    console.log('local>>>>>',this.props)
        
        //  console.log("local>>>",localStorage)
        console.log("local>>>>>>>",localStorage.getItem('img'))
        return(
        
                 
     <div id='Item_detail_main'>


        
        
        
        <div id='item_descrp'>
          
             <div id='item__descrip_inner_1'>
                <img src={localStorage.getItem('image')}/>
            </div>
             

             <div id='item__descrip_inner_2'>
             <img src={localStorage.getItem('image')}/>
             <img src={localStorage.getItem('image')}/>
             </div>

             <div id='item__descrip_inner_3'>
                     <p>Detail</p>
                     <div id='item__descrip_inner_3_inner'>
                         
                         
                         
                         
                         <div id='item_descrip_inner_3_inner_inner_1'>
                         <span>
                         Make
                         </span>
                         <p>
                          Techno
                         </p>
                         </div>


                         
                         <div id='item_descrip_inner_3_inner_inner_2'>
                         <span>
                         Condition
                         </span>
                         <p>
                          Used
                         </p>
                         </div>

                     </div>

                     <br></br>
                     
                     <div id='item_descrip_inner_3_inner_description'>
                     <p>Description</p>
                     <div>Koi fault nahi ha warenty 6month ki online check</div>
                     </div>



             </div>

        </div>





        
        
        
        
        
        <div id='item_price'> 
            <br/>
            <div id='item_price_inner_1'>
        <span>{localStorage.getItem('price')}</span>
                 <p>{localStorage.getItem('detail')}</p>
            </div>
            <br/>
         
         <div id='item_price_inner_2'>
                <span>Seller description</span>
                <button>Chat with seller</button>
            </div>
            <br/>

            <div id='item_price_inner_3'>
                <span>Posted in</span>
                <p>chandi chowk,Rawalpindi,pakistan</p>
            </div>
            <br/>
        </div>
 
        
        
        
        
        
        
             
             
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







export default connect(mapStateToProps,null) (Item_detail);




