export const logInFirebase = (emailValue, passwordValue) =>
  firebase.auth().signInWithEmailAndPassword(emailValue, passwordValue)


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
    querySnapshot.forEach((post) => {
      data.push({
        id: post.id,
        post: post.data().post
      });
    });
    funcionCallback(data);
  });
}

export const deletePost = (idPost) => {
  return firebase.firestore().collection("post").doc(idPost).delete()
  .then( () => {
  })
  .catch((error) => {
    console.error("Error removing document: ", error);
  });
}

export const editPost = (id, notes, state) => {
  return firebase.firestore().collection("post").doc(id).update({
    post: notes,
    complete: state,
  })
    .then(function () {
      console.log("Texto editado!");
    })
    .catch(function (error) {
      console.error("Error writing document: ", error);
    });

}