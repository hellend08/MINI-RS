import {logInFirebase} from '../firebase/controller-firebase.js';

export default () => {
const body = document.createElement('div');
const templateOne = `
  <header>
    <img class="" src="" alt="">
  </header>
  <section class="" id="">
    <h1>VeggieHappy</h1>
    <h3 class="">Bienvenido a VeggieHappy, la única red que te compartirá deliciosas recetas vegnas.</h3>
<!-- <p class="error-message" id="error-message"></p> -->
    <input class="input" id="email" type="email" placeholder="   &#9993    Email">
    <input class="input" id="password" type="password" placeholder="   &#128274     Password">
    <button class="" id="login"> Log In </button>
    <h3 class="text">¿No tienes una cuenta?<a href=""> Regístrate.</a></h3>
  </section>`

  body.innerHTML = templateOne;

const buttonLogin = body.querySelector('#login');
const emailValue = body.querySelector('#email').value;
const passwordValue = body.querySelector('#password').value;

  buttonLogin.addEventListener('click', () => {
    logInFirebase(emailValue, passwordValue);
    console.log('Hola');
  });
  return body;
};