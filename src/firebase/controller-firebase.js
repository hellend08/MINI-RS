export const logInFirebase = (emailValue, passwordValue) => {
  firebase.auth().createUserWithEmailAndPassword(emailValue, passwordValue)
    .then(() => {
      window.location.hash = '#/home'
    })
    .catch(() => alert("Error de login"));
}

export const postNotes = (notes) => {
  return firebase.firestore().collection("post").add({
    post: notes
  })
    .then(() => {
      // console.log("Document written with ID: ");
      alert("Nota publicada");
      document.querySelector('#notes').value = '';
    })
    .catch(() => {
      alert("Nota no publicada");
    });
}

export const getPost = () => {
return firebase.firestore().collection("post").get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data().post}`);
  });
});

}

