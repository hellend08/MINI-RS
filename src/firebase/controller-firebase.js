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
      document.querySelector('#notes').value = '';
    })
    .catch(() => {
      alert("Nota no publicada");
    });
}

export const getPost = (funcionCallback) => {
  return firebase.firestore().collection("post").onSnapshot((querySnapshot) => {
    const data = [];
    querySnapshot.forEach((doc) => {
      data.push({
        id: doc.id,
        post: doc.data().post
      });
    });
    funcionCallback(data);
  });
}

export const deletePost = (idPost) => {
  return firebase.firestore().collection("post").doc(idPost).delete().then(function () {
  }).catch((error) => {
    console.error("Error removing document: ", error);
  });
}

export const editPost = (id, notes) => {
  return firebase.firestore().collection("post").doc(id).update({
    post: notes
  })
  .then(function() {
    console.log("Texto editado!");
  })
  .catch(function(error) {
    console.error("Error writing document: ", error);
  });

}