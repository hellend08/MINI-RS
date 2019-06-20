export const logInFirebase = (emailValue, passwordValue) => {
  return firebase.auth().signInWithEmailAndPassword(emailValue, passwordValue);
};

export const registryFirebase = (emailCreate, passwordCreate) => {
  return firebase.auth().createUserWithEmailAndPassword(emailCreate, passwordCreate);
};

export const logInFacebook = () => {
  let provider = new firebase.auth.FacebookAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};

export const logInGmail = () => {
  let provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};

export const singOff = () => {
  return firebase.auth().signOut();
};

export const postNotes = (notes) => {
  return firebase.firestore().collection("post").add({
    post: notes
  });
};

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
};

export const deletePost = (idPost) => {
  return firebase.firestore().collection("post").doc(idPost).delete()
    .then(() => {
      // console.log('Eliminado');
    })
    .catch(() => {
      // console.log('Error al eliminar');
    });
};

export const editPost = (id, notes, state) => {
  return firebase.firestore().collection("post").doc(id).update({
    post: notes,
    complete: state,
  })
    .then(() => {
      // console.log("Texto editado!");
    })
    .catch(() => {
      // console.error("Error writing document: ", error);
    });
};