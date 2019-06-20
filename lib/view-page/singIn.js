import { eventLogin } from './events.js';
import { logInFacebook, logInGmail } from '../firebase/controller-firebase.js';
export const singIn = () => {
  const sectionLogin = document.createElement('div');
  const templateLogin = `
  <div class="login-container">
    <header>
      <img class="logo" src="./images/govegan.png" alt="vegan-logo">
    </header>
    <section class="section-login" id="">
      <h1 class="text">VeggieHappy 	&#127806</h1>
    <!--  <h3 class="">¡Bienvenido a VeggieHappy! </h3> -->
      <p class="text">La única red donde tus novedades, ideas e informacion del veganismo son utiles para los demás.</p>
      <input class="input" id="email" type="email" placeholder="   &#9993    Email">
      <input class="input" id="password" type="password" placeholder="   &#128274     Password">
      <a href="#/login" ><button class="button" id="login"> Log In </button></a>
      <article>
        <h4 class="text">Puedes ingresar también con...</h4>
        <a id="facebook"><img class="icon" src="./images/facebook.png" alt="facebook"></a>
        <a" id="gmail"><img class="icon" src="./images/gmail.png" alt="gmail"></a>
      </article>
      <h4 class="text" >¿No tienes una cuenta?<a href="#/registry"> Regístrate.</a></h4>
      <div id="get-home"></div>
    </section>
  </div>`;
  sectionLogin.innerHTML = templateLogin;
  const buttonLogin = sectionLogin.querySelector('#login');
  buttonLogin.addEventListener('click', eventLogin);
  const buttonFacebook = sectionLogin.querySelector('#facebook');
  buttonFacebook.addEventListener('click', logInFacebook);
  const buttonGmail = sectionLogin.querySelector('#gmail');
  buttonGmail.addEventListener('click', logInGmail);
  return sectionLogin;
};