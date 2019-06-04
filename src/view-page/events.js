import { logInFirebase, postNotes } from '../firebase/controller-firebase.js';

export const eventLogin = () => {
    const emailValue = document.querySelector('#email').value;
    const passwordValue = document.querySelector('#password').value;
    logInFirebase(emailValue, passwordValue)
    // .then(() => changeHash = ('#/home')).catch(() => alert("Error de login"));
}

export const eventPost = () => {
    const noteValue = document.querySelector('#notes');
    postNotes(noteValue);

}