import {RegistryFirebase} from '../firebase/controller-firebase.js'
export const newUser = () => {

    const sectionRegistry = document.createElement('div');
    const templateRegistry = `
    <section class="section-login">
    <input class="input" id="name" type="text" placeholder="   Nickname">
    <input class="input" id="email" type="email" placeholder="   &#9993    Email">
    <input class="input" id="password" type="password" placeholder="   &#128274     Password">
    <button class="button" id="registered-user"> Registry </button>
    <br>
    <foter><img class="logo" src="./images/logo-vegan.png"></foter>
    </section>`

    sectionRegistry.innerHTML = templateRegistry;
    const buttonRegisteredUser = sectionRegistry.querySelector('#registered-user');

    buttonRegisteredUser.addEventListener('click', () => {
        const userName = sectionRegistry.querySelector('#name').value;
        const userEmail = sectionRegistry.querySelector('#email').value;
        const userPassword = sectionRegistry.querySelector('#password').value;
        RegistryFirebase(userEmail, userPassword);
        console.log(userName);
    });
    return sectionRegistry;
};