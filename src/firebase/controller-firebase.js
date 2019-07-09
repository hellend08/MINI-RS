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

export const collectionUser = (objUser) => {
  return firebase.firestore().collection("post").doc(objUser.uid).set(objUser);
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
        post: post.data().post,
        privacy: post.data().privacy,
        likes: post.data().likes
      });
    });
    funcionCallback(data);
  });
};

export const editPost = (id, notes, privacySelect) => {
  return firebase.firestore().collection("post").doc(id).update({
    post: notes,
    privacy: privacySelect
  });
};

export const deletePost = (idPost) => {
  return firebase.firestore().collection("post").doc(idPost).delete();
};