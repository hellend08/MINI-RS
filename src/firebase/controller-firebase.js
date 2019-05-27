export const logInFirebase = (emailValue, passwordValue) => {
 firebase.auth().signInWithEmailAndPassword(emailValue, passwordValue).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
}
    