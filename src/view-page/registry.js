import { eventRegistry } from './events.js';

export const viewregistry = () => {
  const sectionRegistry = document.createElement('div');
  const templateRegistry = `
    <div class="login-container">
      <header>
        <img class="logo" src="./images/govegan.png" alt="vegan-logo">
      </header>
      <section class="section-login" id="pag-one">
        <h2 class="text">VeggieHappy 	&#127806</h2>
        <input class="input" id="name" type="text" placeholder="Nickname">
        <input class="input" id="email" type="email" placeholder="   &#9993     Email">
        <input class="input" id="contraseña" type="password" placeholder="   &#128274     Password">
        <a href="#/registry" ><button class="button" id="registry">Registrar</button></a>
      </section>
    </div>`;

  sectionRegistry.innerHTML = templateRegistry;

  const buttonRegistry = sectionRegistry.querySelector('#registry');
  buttonRegistry.addEventListener('click', eventRegistry);

  return sectionRegistry;
};