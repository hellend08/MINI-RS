import { logInFirebase } from '../firebase/controller-firebase.js';
import {viewHome} from './homeToDo.js'

export default () => {
  const body = document.createElement('div');
  const template = `
  <header>
    <img class="logo" src="./images/govegan.png" alt="vegan-logo">
  </header>
  <section class="login-container" id="">
    <h1>VeggieHappy</h1>
    <h3 class="">¡Bienvenido a VeggieHappy! </h3>
    <p>La única red que te compartirá una idea del veganismo que no conocías.</p>
<!-- <p class="error-message" id="error-message"></p> -->
    <input class="input" id="email" type="email" placeholder="   &#9993    Email">
    <input class="input" id="password" type="password" placeholder="   &#128274     Password">
    <button class="" id="login"> Log In </button>
    <h3 class="text">¿No tienes una cuenta?<a href=""> Regístrate.</a></h3>
    <div id="get-home"></div>
  </section>`

  body.innerHTML = template;
  const buttonLogin = body.querySelector('#login');
  const emailValue = body.querySelector('#email').value;
  const passwordValue = body.querySelector('#password').value;

  buttonLogin.addEventListener('click', () => {
    logInFirebase(emailValue, passwordValue);
    body.innerHTML = '';
    body.appendChild(viewHome());
  });
  return body;
};