import {Link} from "react-router-dom";
import React, { Component } from 'react';
import firebase from './firebase';

// console.log(firebase)

class Sell extends Component {
    state = {  }




    render()
     {
        return (
            <div id='sell'>


              <div id='sell_header'>
               
                 <img onClick={()=>this.props.history.goBack()} id='arrow' src={require('../images/sell/pic_1.png')}/>
                <img src={require('../images/olx.png')}/>
               
              </div>
               



              
              
              
              <div id='sell_main'>
              
              
              <br/>
              <div id='sell_main_inner_1'>
              POST YOUR AD   
              </div>
             
              
            </div>




             
            </div>

        );
    }
}


class Sell_2 extends Component {
  state = {  }
  render()
  {
    
    return (
      <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>     
         <div id='sell_main_inner_2'>

        <p>CHOOSE A CATEGORAY</p>
        <ul id='ul_sell_main_inner_2'>
          <li>Mobiles
          <ul id='ul2_sell_main_inner_2'>
            <li onClick={()=>{this.props.history.push('/post/attributes')}}>Tablets</li>
            <li onClick={()=>{this.props.history.push('/post/attributes')}}>Accessories</li>
            <li onClick={()=>{this.props.history.push('/post/attributes')}}>Mobiles Phone</li>
          </ul>
          </li>
          
          <li>Vchicles</li>
          <li>Property for Sale</li>
          <li>Property for Rent</li>
          <li>Electronics & Home Applications</li>
          <li>Bikes</li>
          <li>Business</li>
          <li>Services</li>
          <li>Jobs</li>

        </ul>
      
      </div>
      </div>


);
}
}

class Sell_item extends Component {

  constructor (){
    super()
    this.state ={
    img_name:'a',title:'',date:'',price:''
  
  }
  

  }
  
   change =(a)=>{var e=document.getElementsByClassName('span')
   e[a].setAttribute("id","span")
   
   switch (a) {
     case '0':
       e[1,2,3,4,5,6].removeAttribute('id')
       break;
       case '1':
       e[0,2,3,4,5,6].removeAttribute('id')
       break;
       case '2':
       e[1,0,3,4,5,6].removeAttribute('id')
       break;
       case '3':
       e[1,2,0,4,5,6].removeAttribute('id')
       break;
       case '4':
       e[1,2,3,0,5,6].removeAttribute('id')
       break;

       case '5':
       e[1,2,3,4,0,6].removeAttribute('id')
       break;
       case '5':
       e[1,2,3,4,5,0].removeAttribute('id')
       break;
   
     default:
       break;
   }
  // e[0].removeAttribute('id') 
 }


title=(title)=>{
  console.log('price',title)
  this.setState({

  title:title
   })
}


price=(price)=>{
  const final_price=`Rs ${price}`
  console.log('price',final_price)
  this.setState({

    price:final_price
   })
}


file=(image)=>{
   console.log(image)
  document.getElementById('label_inner').innerHTML=image.name
  this.setState({
     file:image
    })
  }
    
    

 upload=(image)=>{
   console.log(image)
   if (this.state.title=='') {
    
     alert("Please Enter Title of your Product")
   }
   if (this.state.price=='') {
    alert("Please Set A Price of your Product")
   }
  if (image==undefined) {
    alert("Please Choose Picture first")
  }
  else{
  this.setState({
     img_name:image.name
    }
    
    )
  
    var date=new Date();
    var da=`"${date}"`
    var d=da.slice(5,12)
    console.log("date",d)
    this.setState({date:d})
    const uploadTask=firebase.storage().ref(`images/${image.name}`).put(image);

    // console.log("databse>>",this.state)
    uploadTask.on(
      "state_changed",
      snapshot =>
      {
        // console.log(snapshot)
      },
error=>{
  alert("ERROR!", error ,"Reload Your Page And try Again")
},
()=>{
  firebase.storage().ref(`images`).child(image.name).getDownloadURL()
  .then(url=>{
    console.log("url>>>>>>>.",url)
    this.set_on_database(url)
  })
}

    )

    document.getElementById('price').value='';
    document.getElementById('title').value='';
     
}
    
  }

  set_on_database=(url)=>{
    console.log("file",this.state.date)
    firebase.database().ref('record').push(
      {
         img_name:this.state.img_name,
         title:this.state.title,
         price:this.state.price,
        date:''+this.state.date,
        url:url
      }
    )
    alert("your Item posted Successfully")
  }
  render()
  
  {
    return (
      
      <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>

      <div id='sell_item'>




           <p>SELECTED CATEGORY
             <div></div>
           </p>

 

             <div id='include_detail'>
               <p>INCLUDE SOME DETAILS</p>
               <span >Condition</span>
               <div id='include_detail_inner_1'>
                  <span  className='span'onClick={()=>this.change('0')}>New</span>
                  <span  className='span'onClick={()=>this.change('1')}>Used</span>
               </div>

               <span>Type</span>
               <div id='include_detail_inner_2'>
                  <span  className='span'onClick={()=>this.change('1')}>Apple</span>
                  <span  className='span'onClick={()=>this.change('3')}>Danny Tabs</span>
                  <span  className='span'onClick={()=>this.change('4')}>Q tabs</span>
                  <span  className='span'onClick={()=>this.change('5')}>Samsung</span>
                  <span  className='span'onClick={()=>this.change('6')}>Others Tablets</span>
               </div>

               <span>Ad Title</span>
               <div id='include_detail_inner_3'>

                 <textarea id='title' onChange={(e)=>this.title(e.target.value)}/>
               </div>

               <span>Description</span>
               <div id='include_detail_inner_4'>
               <textarea/>
               </div>

               
            </div>          




        

            <div id='set_a_price'>
               <p>SET A PRICE</p>

               <span>Price</span>
               <div id='set_a_price_inner_1'>
               <span>Rs</span>
               <input id='price' type='text'onChange={(e)=>this.price(e.target.value)}></input>
               </div>
               <br/>


               
            </div>










            <div id='set_a_price'>
               
               <p>Upload image</p>



               <div className="input-group mb-3">
        <div className="input-group-prepend">
          <button className="btn btn-outline-secondary" type="button" id="inputGroupFileAddon03"    >Upload</button>
        </div>
        <div className="custom-file">
          <input type="file" className="custom-file-input" id="inputGroupFile03" aria-describedby="inputGroupFileAddon03" onChange={(e)=>this.file(e.target.files[0])}/>
          <label id='label_inner' className="custom-file-label" htmlFor="inputGroupFile03">Choose file</label>
        </div>
      </div>

<br/><br/>
<div style={{display:'flex',justifyContent:'center'}}>
<button  onClick={(e)=>this.upload(this.state.file)} type="button" class="btn btn-dark">Sumbit</button>
</div>
<br/>
               
            </div>






      </div>

    </div>
    );
  }
}




export  {Sell,Sell_2,Sell_item};