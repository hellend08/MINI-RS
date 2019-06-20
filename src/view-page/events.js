import { logInFirebase, registryFirebase, logInFacebook, logInGmail, singOff, postNotes } from '../firebase/controller-firebase.js';

export const eventLogin = () => {
  const emailValue = document.querySelector('#email').value;
  const passwordValue = document.querySelector('#password').value;
  logInFirebase(emailValue, passwordValue)
    .then(() => {
      window.location.hash = '#/home';
    })
    .catch(() => alert("¡Registrate para empezar!"));
};

export const eventRegistry = () => {
  // const nickname = document.querySelector('#name').value;
  const emailCreate = document.querySelector('#email').value;
  const passwordCreate = document.querySelector('#contraseña').value;
  registryFirebase(emailCreate, passwordCreate)
    .then(() => {
      window.location.hash = '#/login';
      alert("¡Ahora inicia sesión!");
    })
    .catch(() => alert("¡Correo no válido!"));
  document.querySelector('#email').value = '';
  document.querySelector('#contraseña').value = '';
};

export const eventFacebook = () => {
  logInFacebook()
    .then(() => {
      window.location.hash = '#/home';
    })  
    .catch(() => {
      // console.log('Error');
    });
};

export const eventGmail = () => {
  logInGmail()
    .then(() => {
      window.location.hash = '#/home';
    })
    .catch(() => {
      // console.log('Error');
    });
};

export const eventSingOff = () =>
  singOff()
    .then(() => {
      window.location.hash = '#/login';
    })
    .catch(() => {
    // console.log('Error');
    });

export const eventPost = () => {
  const notes = document.querySelector('#notes').value;
  postNotes(notes)
    .then(() => {
      document.querySelector('#notes').value = '';
    })
    .catch(() => {
      alert("Nota no publicada");
    });
};