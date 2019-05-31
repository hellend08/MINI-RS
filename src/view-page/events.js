import {logInFirebase} from '../firebase/controller-firebase.js';

export const eventLogin = () => {
    const emailValue = body.querySelector('#email-login').value;
    const passwordValue = body.querySelector('#password-login').value;
    logInFirebase(emailValue, passwordValue)
    .then( () => { 
        window.location.hash = '#/login'
    }).catch( () => alert("Error de login"));
}