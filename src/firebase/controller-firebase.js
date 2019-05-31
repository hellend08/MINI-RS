export const logInFirebase = (emailValue, passwordValue) => {
 firebase.auth().createUserWithEmailAndPassword(emailValue, passwordValue)
//  .then(()=>{
//    console.log('entro');
   
//  })
 .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
}