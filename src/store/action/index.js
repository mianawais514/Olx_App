 import firebase from "../../components/firebase"


const set_data=(price,detail,img)=>{
// console.log(`"data saved" ${a}`)
    return(dispatch)=>{
        dispatch(
            {
                type: "bye",
                price:price,
                detail:detail,
                img:img
                
            }
        )
    }
}
const facebook_login=(history)=>{
    return(dispatch)=>{

          var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then(function(result) {
    
        var token = result.credential.accessToken;
        // The signed-in user info.
        
        var user = result.user;
        // console.log("user",user)
        let users={
            name:user.displayName,
            email:user.email,
            profile:user.photoURL,
            uid:user.uid
        }

        var random= Math.random()*800
        var round=Math.round(random)

        
        

        firebase.database().ref('Login_users').child(`${user.displayName}    ${round}`).set(users)
        dispatch(
            {
                type: "hello",
                payload:users
                
            }
            )
        history.push('/')
        // console.log("history",history)
        
        // ...
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        alert("error>>>>>>>>>",error)
        // ...
      });
    }
}

const local=(price,img,detail)=>{
    localStorage.setItem('price',price)
    localStorage.setItem('image',img)
    localStorage.setItem('detail',detail)

        
    }

export {
    set_data,
    facebook_login,
    local
}