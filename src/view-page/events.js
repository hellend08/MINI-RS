import { logInFirebase, registryFirebase, postNotes } from '../firebase/controller-firebase.js';

export const eventLogin = () => {
    const emailValue = document.querySelector('#email').value;
    const passwordValue = document.querySelector('#password').value;
    logInFirebase(emailValue, passwordValue)
        .then(() => {
            window.location.hash = '#/home';
        })
        .catch(() => alert("¡Registrate para empezar!"));
}

export const eventRegistry = () => {
    // const nickname = document.querySelector('#name').value;
    const emailCreate = document.querySelector('#email').value;
    const passwordCreate = document.querySelector('#contraseña').value;
    registryFirebase(emailCreate, passwordCreate)
        .then(() => {
            window.location.hash = '#/login';
            alert("¡Ahora inicia sesión!")
        })
        .catch(() => alert("¡Correo no válido!"));

}

export const eventPost = () => {
    const notes = document.querySelector('#notes').value;
    postNotes(notes);

}