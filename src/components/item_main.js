import React,{Component}from 'react';
import {Link} from "react-router-dom";
import Item from './items';
import firebase from './firebase';


class Item_main extends Component{
  constructor(){
    super()
  
    this.state = {Itemslist : []}
  

     
  }

    

componentDidMount(){


  

  firebase.database().ref('record').on("value", (snapshot) => {
    let itemlist = [];
    snapshot.forEach(snap => {
      // snap.val() is the dictionary with all your keys/values from the 'students-list' path
     itemlist.unshift(snap.val())
    });
    this.setState({Itemslist: itemlist});
    });
    
    
    
    
    
    
    // var events=[];
    
    //   var promise = new Promise(function(resolve,reject){
      //   firebase.database().ref('record').on('child_added',(data)=> {
        //     var dat=data.val();
        //     if (dat.title) {
          //       console.log('Length',this.state.data.length)
          //       var i=0;
          
          //       while (i<this.state.data.length) {
            //         if (dat.title!=this.state.data[i].title) {
              //           // console.log(dat.title)
              //           if (i==this.state.data.length-1) {
                
                //             console.log('final',i,dat.title)
                //             // this.setState({
                  
                  
                  //             //   data:[...this.state.data,{title:dat.title}]
                  //             // })
                  //           }
                  
                  //         }
                  //         else{
                    //           // console.log('else',this.state.data[i].title)
                    //         i=this.state.data.length;
                    //         // console.log('i',i)
                    //         }
                    
                    //         i++;
                    //       }
                    
                    //     }
                    //     // this.dat(data.val())
                    
                    //     //       // var     final_data=data.val();
                    
                    //     //       //  console.log(final_data)
                    
                    //     //       //  events.push({
                      //       //         //    title: final_data.title, 
                      // //         //    img: final_data.img_name
                      // //         //  },);
                      
                      // //         if(data)
                      // //         { 
                        
                        
                        //   //           this.setState({
                          
                          //     //           a:"awais"
                          //     //           })
                          //     //           //  console.log(final_data);
                          //     //        resolve(data);
                          
                          
                          //     //      }
                          //     //      else
                          //     //      {
                            //       //      reject(`Your are not Regestred .First Regester Your self`);
                            //       //      }
                            
                            //       //    })
                            //     })
                            
                            //    promise.then((data)=>{
                              //      console.log('data',data)
                              //     //  this.setState({
                                //     //    user:data
                                //     //  })
                                //     }
                                
                                //    )
                                
                                
                                //     // detail=data.val()
                                
                                //   // setTimeout(() => {
                                  //   //   this.data(detail)
                                  //   // }, 9000);
                                  //   // console.log(detail)
                                  
                                  //   // console.log('Gain Data',this.state)
                                  //
                                  //  dat=(data)=>{
                                    // // console.log(data)
                                    // // console.log(data.title)
                                    // // console.log('image',data.img_name)
                                    // this.setState({
                                      
                                      //   ...this.state,
                                      //   data:[...this.state.data,{title:data.title}]
                                      // })
                                      // // this.setState({
                                        // //   ...this.state
                                        // // })
                                        // }
                                        
                                        
                                        
                                      }
                                      
                                      
                                      render()
                                      {
                                        console.log('snap',this.state.Itemslist[0])
                                        // console.log(this.state.studentslist)
                                        // console.log(this.state.user)
                                        
                                        
                                        const items=
                                        [
                                          {img:"pic_1.jpg",name:'Rs 225,000',detail:'Iphone 11 pro max 256 gb gold color 10/10'},
                                          {img:"pic_2.jpg",name:'Rs 133,500',detail:'iphone 11 pro 64gb non active non pta brand new'},
                                          {img:"pic_3.jpg",name:'Rs 19,799',detail:'Xiaomi Redmi 9 < 4gb ~64gb> <3gb~32gb>New Box Pack'},
                                          {img:"pic_4.jpg",name:'Rs 5,600',detail:'OPPO A31 MOBILE ON INSTALLMENTS OPPO F17PRO MOBILE OPPO RENO4 MOBILE'},
                                          
                                          
                                        ]
                                        
                                        const item_2=
                                        [
                                          {img:'pic_6.jpg' ,name:'Rs 7,000',detail:'1 Bds - 1 Ba - 3 Marla'},
                                          {img:'pic_7.jpg' ,name:'Rs 99,999',detail:'Oneplus8 12gb 256gb brand new pta approved with wrap charger only 100k'},
          {img:'pic_10.jpg' ,name:'Rs 30,000',detail:'Orient Led 40 inch'},
          {img:'pic_11.jpg' ,name:'Rs 8,000',detail:'Bridal Lehnga'},
          {img:'pic_13.jpg' ,name:'Rs 15,000',detail:'Samsung C7 Original Led Panel'},
          {img:'pic_14.jpg' ,name:'Rs 54,800',detail:'OPPO RENO 4 8/128  BOX PACK AVAILABLE HERE'},
          {img:'pic_15.jpg',name:'Rs 45,000',detail:'American Treadmill excellent working condition'},
          {img:'pic_16.jpg',name:'Rs 570',detail:'Alternative of plastic bags (non woven bags)'},
          {img:'pic_17.jpg',name:'Rs 5,000',detail:'Panasonic cam recorder ultra hd'},
          {img:'pic_18.jpg',name:'Rs 22,999',detail:'43 inch Samsung Led huge Discounted Offer'},
          {img:'pic_19.jpg',name:'Rs 50,000',detail:'Ajwa Khajoor'},
          {img:'pic_20.jpg',name:'Rs 300,000 - 7 Years',detail:'Honda civic (Reborn) Available on Easy Installment plans'},
          {img:'pic_21.jpg',name:'Rs 14,000',detail:'Vivoy93c 3/32'},
          {img:'pic_22.jpg',name:'Rs 250,000 - Flexible',detail:'Corolla gli 2009 hasil krey asan iqsat me'},
          {img:'pic_23.jpg',name:'Rs 3,485',detail:'Nokia C3-00 100% Original Metal Body || Delivery All Pakistan'},
          {img:'pic_24.jpg',name:'Rs 14,999',detail:'Huawei p10 available stock at USAMA MOBILE WHOLESALLER FIX PRICE SHOP'},
          {img:'pic_24.jpg',name:'Rs 17,600',detail:'Tecno Spark 5 Pro (4GB 64GB) Box Pack 5000MAH Batterry All Colours'}
          // {img:'',name:'',detail:''},
          // {img:'',name:'',detail:''},{img:'',name:'',detail:''},
          
          
        ]
      
        
        
      
        return(
          <div id='item_main' >
<div id='main'>


<div id='upper'>
  <span>More On Mobile Phones</span>
  <a>View more</a>
</div>


<div id='lower'> 

{items.map((item,index)=>{ return(


<Item key={index} price={item.name} detail={item.detail} img={require(`../images/more_on_mobileuploads/${item.img}`)}/>




)})}



</div>

</div>














<br/><br/>


<div id='main_2'>
    
    
    
    
    <div id='upper'>
      <span>Fresh Recommendations</span>
      
    </div>
  
  
  
  
    <div id='lower'  >
   

   {this.state.Itemslist.map((item,index)=>{ return(


<Item key={index} price={item.price} detail={item.title} img={item.url} date={item.date}/>



)})}  


           
    
    {item_2.map((item,index)=>{ return(


<Item key={index} price={item.name} detail={item.detail} img={require(`../images/more_on_mobileuploads/${item.img}`)}/>



)})} 
 

          
   
  </div>
    



</div>





</div>










                 
            

                

        )
    }
}


export default Item_main;


