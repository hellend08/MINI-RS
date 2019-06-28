import { deletePost, editPost } from '../firebase/controller-firebase.js';

export const viewPost = (post) => {
  const listNotes = document.createElement('li');

  listNotes.innerHTML = `
    <input type="checkbox" id="checkbox-post-${post.id}">
    <span id="post-${post.id}">${post.post}</span>
    <button class="delete" id="delete-post-${post.id}"><img class="icon" src="./images/delete.png" alt="button-delete"></button>
    `;

  const deleteButton = listNotes.querySelector(`#delete-post-${post.id}`);
  deleteButton.addEventListener('click', () => {
    deletePost(post.id);
  });

  
  const editCheckbox = listNotes.querySelector(`#checkbox-post-${post.id}`);
  editCheckbox.addEventListener('click', () => {
    if (editCheckbox.checked === true) {
      const postCrossedOut = (post.post).strike();
      listNotes.querySelector(`#post-${post.id}`).innerHTML = postCrossedOut;
      editPost(post.id, post.post, 'true'); 
    } else {
      const postPost = (post.post);
      listNotes.querySelector(`#post-${post.id}`).innerHTML = postPost;
      editPost(post.id, post.post, 'false');
    }  
  });
  
  return listNotes;
};