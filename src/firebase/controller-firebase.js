export const logInFirebase = (emailValue, passwordValue) => {
  firebase.auth().createUserWithEmailAndPassword(emailValue, passwordValue)
    .then(() => {
      window.location.hash = '#/home'
    })
    .catch(() => alert("Error de login"));
}

export const postNotes = (noteValue) => {
 return firebase.firestore().collection("post").add({
    name: 'nana',
    note: noteValue
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});
}