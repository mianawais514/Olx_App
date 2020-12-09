import React,{Component}from 'react';
import {Link} from "react-router-dom";
import {connect}from 'react-redux';
import {local}from '../store/action/index'
class Item extends Component{
    render(){
      



// const item=
// [
// {img:"pic_1.jpg",name:'Rs 225,000',detail:'Iphone 11 pro max 256 gb gold color 10/10'},
// {img:"pic_2.jpg",name:'Rs 133,500',detail:'iphone 11 pro 64gb non active non pta brand new'},
// {img:"pic_3.jpg",name:'Rs 19,799',detail:'Xiaomi Redmi 9 < 4gb ~64gb> <3gb~32gb>New Box Pack'},
// {img:"pic_4.jpg",name:'Rs 5,600',detail:'OPPO A31 MOBILE ON INSTALLMENTS OPPO F17PRO MOBILE OPPO RENO4 MOBILE'},


// ]

// const item_2=
// [
//     {img:'pic_6.jpg' ,name:'Rs 7,000',detail:'1 Bds - 1 Ba - 3 Marla'},
//     {img:'pic_7.jpg' ,name:'Rs 99,999',detail:'Oneplus8 12gb 256gb brand new pta approved with wrap charger only 100k'},
//     {img:'pic_10.jpg' ,name:'Rs 30,000',detail:'Orient Led 40 inch'},
//     {img:'pic_11.jpg' ,name:'Rs 8,000',detail:'Bridal Lehnga'},
//     {img:'pic_13.jpg' ,name:'Rs 15,000',detail:'Samsung C7 Original Led Panel'},
//     {img:'pic_14.jpg' ,name:'Rs 54,800',detail:'OPPO RENO 4 8/128  BOX PACK AVAILABLE HERE'},
//     {img:'pic_15.jpg',name:'Rs 45,000',detail:'American Treadmill excellent working condition'},
// {img:'pic_16.jpg',name:'Rs 570',detail:'Alternative of plastic bags (non woven bags)'},
// {img:'pic_17.jpg',name:'Rs 5,000',detail:'Panasonic cam recorder ultra hd'},
// {img:'pic_18.jpg',name:'Rs 22,999',detail:'43 inch Samsung Led huge Discounted Offer'},
// {img:'pic_19.jpg',name:'Rs 50,000',detail:'Ajwa Khajoor'},
// {img:'pic_20.jpg',name:'Rs 300,000 - 7 Years',detail:'Honda civic (Reborn) Available on Easy Installment plans'},
// {img:'pic_21.jpg',name:'Rs 14,000',detail:'Vivoy93c 3/32'},
// {img:'pic_22.jpg',name:'Rs 250,000 - Flexible',detail:'Corolla gli 2009 hasil krey asan iqsat me'},
// {img:'pic_23.jpg',name:'Rs 3,485',detail:'Nokia C3-00 100% Original Metal Body || Delivery All Pakistan'},
// {img:'pic_24.jpg',name:'Rs 14,999',detail:'Huawei p10 available stock at USAMA MOBILE WHOLESALLER FIX PRICE SHOP'},
// {img:'pic_24.jpg',name:'Rs 17,600',detail:'Tecno Spark 5 Pro (4GB 64GB) Box Pack 5000MAH Batterry All Colours'}
// // {img:'',name:'',detail:''},
// // {img:'',name:'',detail:''},{img:'',name:'',detail:''},


// ]


   
// console.log('props>>>>>>>>>>>.',this.props.img)
        return(
        
<Link id='item_link' to='/item'  onClick={()=>local(this.props.price,this.props.img,this.props.detail)}>
                       
<div className="card" >
{/* <Image source={require(`./img${Math.floor(Math.random() * 100)}.png`)}/> */}
<img src={this.props.img}
className="card-img-top" alt="..."  id='more_on_mobile'/>
<div className="card-body">
<span>{this.props.price}</span>
 <p className="card-text">{this.props.detail}</p>
 <p className="card-text_2">{this.props.date}</p>
 
</div>
</div>

</Link>
           

              

                

        )
    }
}




const mapStateToProps=(state)=>({
   
   
   })

const mapDispatchToProps =(dispatch)=> ({
    dat: (price)=> dispatch(local(price))
   })
  
  





export default connect(mapStateToProps,mapDispatchToProps) (Item);

