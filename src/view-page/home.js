import { eventPost } from './events.js';
import { viewPost } from './post.js';

export const viewHome = (dataPost) => {
  const sectionHome = document.createElement('section');
  const templateHome = `
    <nav class="menu">
      <a class="log-up" href="#/profile"> Usuario</a>
      <a class="log-up" href="#/home"> VeggieHappy </a>
      <a class="log-up" href="#/singOff"><img class="icon" src="./images/logout.png" alt="log-out">Log Up</a>
    </nav>
    <header class="block-profile">
      <div class="container">
        <img class="avatar" src="./images/profile.jpg" alt="profile-photo">
        <p class="">user</p>
      </div>
    </header>
  
    <form class="">
      <section class="share-post">
        <textarea class="post"  id="notes" rows="4" cols="15" placeholder="¿Qué estas pensando?"></textarea>
        <input class="view-none" type="file" id="input-file" name="file" multiple>
        <label class="label-camera" for="input-file"><img  class="icon" src="./images/camera-retro.png"></label>
        <select class="custom-select">
          <option value="Publico">Publico</option>
          <option value="Privado">Privado</option>
        </select>
        <button class="btn-lg" id="share-post">Compartir</button>
      </section>
      <div>
        <ul class="list-notes" id="post-list" >
        </ul>
      </div>

    </form>
    `;

  sectionHome.innerHTML = templateHome;
  const sharePost = sectionHome.querySelector('#share-post');
  const postList = sectionHome.querySelector('#post-list');
  // const userName = user;

  
  dataPost.forEach(allPost => {
    postList.appendChild(viewPost(allPost));
  });

  sharePost.addEventListener('click', eventPost);
  return sectionHome;
};