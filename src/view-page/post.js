import { deletePost} from '../firebase/controller-firebase.js';
import { eventEditPost } from './events.js';

export const viewPost = (post) => {
  const listNotes = document.createElement('li');
  listNotes.setAttribute("class", "lis");

  listNotes.innerHTML = `<div id="block-posteo">
  <h6 class="user-name">User</h6>
  <section class="posteo">
    <p class="container" id="text-${post.id}">${post.post}</p>
    </section>
    <form class="forma-menu">
      <span class="button-like"><img class="icon" src="./images/like.png" alt="like-icon"></span>
      <span id="btn-edit-${post.id}"><img class="icon" src="./images/edit.png" alt="edit-icon"></span>
      <span class="delete" id="delete-post-${post.id}"><img class="icon" src="./images/delete.png" alt="button-delete"></span>
    </form>
    </div>`;

  const editNotes = listNotes.querySelector(`#btn-edit-${post.id}`);
  editNotes.addEventListener('click', () => {
    listNotes.querySelector(`#block-posteo`).innerHTML = '';
    listNotes.querySelector(`#block-posteo`).innerHTML = `
    <h6 class="user-name">User</h6>
    <textarea class="post" id="new-${post.id}"cols="15" rows="5"></textarea>
    <form class="forma-menu">
      <select class="custom-select" id="privacy-edit">
        <option value="public" >Público &#128101 </option>
        <option value="private">Privado &#128274</option>
      </select> 
      <span id="new-btn-edit"><img class="icon" src="./images/save.png" alt="save-edit"></span>
    </form>`;
    const inputPost = listNotes.querySelector(`#new-${post.id}`);
    inputPost.value = post.post;
    eventEditPost(post.id, inputPost);
  });

  const deleteButton = listNotes.querySelector(`#delete-post-${post.id}`);
  deleteButton.addEventListener('click', () => {
    deletePost(post.id);
  });
  return listNotes;
};