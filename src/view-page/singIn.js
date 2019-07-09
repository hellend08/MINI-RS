import { eventLogin, eventFacebook, eventGmail } from './events.js';

export const singIn = () => {
  const sectionLogin = document.createElement('div');
  const templateLogin = `
    <div class="login-container">
      <header>
        <img class="logo" src="./images/govegan.png" alt="vegan-logo">
      </header>
      <section class="section-login" id="">
        <h2 class="text">VeggieHappy 	&#127806</h2>
    <!--  <h3 class="">¡Bienvenido a VeggieHappy! </h3> -->
        <p class="text">La única red donde tus novedades, ideas e informacion del veganismo son utiles para los demás.</p>
        <input class="input" id="email" type="email" placeholder="   &#9993    Email">
        <input class="input" id="password" type="password" placeholder="   &#128274     Password">
        <a href="#/login" ><button class="button" id="login"> Log In </button></a>
        <article>
          <h6 class="text">Puedes ingresar también con...</h6>
          <a id="facebook"><img class="fb-gm" src="./images/facebook.png" alt="facebook"></a>
          <a" id="gmail"><img class="fb-gm" src="./images/gmail.png" alt="gmail"></a>
        </article>
        <h6 class="text" >¿No tienes una cuenta?<a href="#/registry"> Regístrate.</a></h6>
        <div id="get-home"></div>
      </section>
    </div>
    <footer>
      <ul class="modal-footer">
			  <li>&copy; Titled By</li>
			  <li>Design: Helen Vásquez</li>
		  </ul>
    </footer>`;

  sectionLogin.innerHTML = templateLogin;

  const buttonLogin = sectionLogin.querySelector('#login');
  buttonLogin.addEventListener('click', eventLogin);

  const buttonFacebook = sectionLogin.querySelector('#facebook');
  buttonFacebook.addEventListener('click', eventFacebook);

  const buttonGmail = sectionLogin.querySelector('#gmail');
  buttonGmail.addEventListener('click', eventGmail);

  return sectionLogin;
};