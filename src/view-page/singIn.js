import {eventLogin} from './events.js'

export const singIn = () => {
  const body = document.createElement('div');
  const template = `
  <div class="login-container">
  <header>
    <img class="logo" src="./images/govegan.png" alt="vegan-logo">
  </header>
  <section class="section-login" id="">
    <h1>VeggieHappy</h1>
    <!--  <h3 class="">¡Bienvenido a VeggieHappy! </h3> -->
    <p>La única red que te compartirá una idea del veganismo que no conocías.</p>
    <input class="input" id="email" type="email" placeholder="   &#9993    Email">
    <input class="input" id="password" type="password" placeholder="   &#128274     Password">
    <a href="#/home" ><button class="button" id="login"> Log In </button></a>
    <div id="get-home"></div>
  </section>
  </div>`

  body.innerHTML = template;
  const buttonLogin = body.querySelector('#login');

  buttonLogin.addEventListener('click', eventLogin);
  
  return body;
};