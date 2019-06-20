import { eventPost } from './events.js';
import { viewPost } from './post.js';
export const viewHome = dataPost => {
  const sectionHome = document.createElement('section');
  const templateHome = `
    <nav class="menu">
      <a class="log-up" href="#/"> Usuario</a>
      <a class="log-up" href="#/home"> VeggieHappy </a>
      <a class="log-up" href="#/singOff"><img class="icon" src="./images/logout.png" alt="log-out">Log Up</a>
    </nav>
    <div>
      <header>
        <img class="avatar" src="./images/profile.jpg">
      </header>
    </div>
    <form class="home-container">
      <section class="container-post" >
        <input class="post" type="text" id="notes" placeholder="¿Qué estas pensando?">
        <button class="button" id="share-post">Share Note</button>
      </section>
      <ul class="list-notes" id="post-list" >
      </ul>
    </form>
    `;
  sectionHome.innerHTML = templateHome;
  const sharePost = sectionHome.querySelector('#share-post');
  const postList = sectionHome.querySelector('#post-list'); // const userName = user;

  dataPost.forEach(allPost => {
    postList.appendChild(viewPost(allPost));
  });
  sharePost.addEventListener('click', eventPost);
  return sectionHome;
};