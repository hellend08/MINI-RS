import {eventPost} from './events.js'

export const viewHome = () => {
    const sectionHome = document.createElement('section');

    const templateHome = `<nav class="menu">
    <a class="log-up" href="#/login">Log Up</a>
    </nav>
    <form class="home-container">
    <input class="post" type="text" id="notes" placeholder="¿Qué estas pensando?">
    <button class="button" id="share-post">Share Note</button>
    <ul class="list-notes">
    <li><input type="checkbox"><label>Aqui va la nota</label>
    <button class="button" >Delete</button></li>
    </form>
    `

    sectionHome.innerHTML = templateHome;
    const sharePost = sectionHome.querySelector('#share-post');

    sharePost.addEventListener('click', eventPost);

    return sectionHome;
};