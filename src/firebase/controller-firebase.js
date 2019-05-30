export const logInFirebase = (emailValue, passwordValue) => {
 firebase.auth().signInWithEmailAndPassword(emailValue, passwordValue)
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

export const RegistryFirebase = (userEmail, userPassword) => {
  firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword)
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
}