import { eventPost} from './events.js'
import { viewPost } from './post.js'

export const viewHome = (dataPost) => {
    const sectionHome = document.createElement('section');
    const templateHome = `
    <nav class="menu">
      <a class="log-up" href="#/login">Log Up</a>
    </nav>
    <form class="home-container">
      <section class="container-post" >
        <input class="post" type="text" id="notes" placeholder="¿Qué estas pensando?">
        <button class="button" id="share-post">Share Note</button>
      </section>
      <ul class="list-notes" id="post-list" >
      </ul>
    </form>
    `

    sectionHome.innerHTML = templateHome;
    const sharePost = sectionHome.querySelector('#share-post');
    const postList = sectionHome.querySelector('#post-list');

    dataPost.forEach(allPost => {
        postList.appendChild(viewPost(allPost))
    });

    sharePost.addEventListener('click', eventPost);
    return sectionHome;
};