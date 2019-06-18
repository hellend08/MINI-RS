export const logInFirebase = (emailValue, passwordValue) =>
  firebase.auth().signInWithEmailAndPassword(emailValue, passwordValue)

export const registryFirebase = (emailCreate, passwordCreate) =>
  firebase.auth().createUserWithEmailAndPassword(emailCreate, passwordCreate)

export const logInFacebook = () => {
  let provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth().signInWithPopup(provider)
    .then(() => {
      window.location.hash = '#/home';
    }).catch(() => {
      console.log('Error');
    });
}

export const logInGmail = () => {
  let provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
    .then(() => {
      window.location.hash = '#/home';
    }).catch(() => {
      console.log('Error');
    });
}

export const singOff = () => {
  firebase.auth().signOut()
  .then(() => {
    window.location.hash = '#/login';
  }).catch(() => {
    console.log('Error');
  });
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
    .then(() => {
      console.log('Eliminado');
    })
    .catch(() => {
      console.log('Error al eliminar');
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