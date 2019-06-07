import { logInFirebase, postNotes, deletePost, editPost } from '../firebase/controller-firebase.js';

export const viewPost = (post) => {
    const listNotes = document.createElement('li');

    listNotes.innerHTML = `
    <input type="checkbox" id="tachar-post-${post.id}" >
    <label for="tachar-post-${post.id}"></label>
    <span class="text" >${post.post}</span>
    <button class="delete" id="delete-post-${post.id}"><img class="icon" src="./images/delete.png" alt="button-delete"></button>
    `

    const deleteButton = listNotes.querySelector(`#delete-post-${post.id}`);
    deleteButton.addEventListener('click', () => {
        deletePost(post.id);
    });

    const editCheckbox = listNotes.querySelector(`#tachar-post-${post.id}`);
    editCheckbox.addEventListener('click', () => {
        editPost(post.id, post.post)
    })

    return listNotes;
}

export const eventLogin = () => {
    const emailValue = document.querySelector('#email').value;
    const passwordValue = document.querySelector('#password').value;
    logInFirebase(emailValue, passwordValue)
        .then(() => {
            window.location.hash = '#/home';
        })
        .catch(() => alert("Error de login"));
}

export const eventPost = () => {
    const notes = document.querySelector('#notes').value;
    postNotes(notes);

}