const int_state={
    users_login:{},
    price:'',
    detail:'',
    img:''
}

export default (state=int_state,action)=>{

console.log('action',action)

        if(action.type=='bye')
    {
        state.price=action.price
        state.detail=action.detail
        state.img=action.img

    } 
    // switch (action.type) {
    //     case 'hello':
    //         return({
    //             ...state,
    //             users:action.payload
    //         })
    //         break;
    
    //     default:
    //         break;
    // }
    if(action.type=='hello')
    {    return({
        
        users_login:action.payload
    })

    }
    console.log('users>>>',state.users)
return state;
}