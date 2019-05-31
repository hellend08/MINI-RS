import {logInFirebase} from '../firebase/controller-firebase.js';

export const eventLogin = () => {
    const emailValue = document.querySelector('#email').value;
    const passwordValue = document.querySelector('#password').value;
    logInFirebase(emailValue, passwordValue)
//     .then( () => { 
//         window.location.hash = '#/login'
//     }).catch( () => alert("Error de login"));
 }