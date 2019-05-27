import {settingFirebase} from './firebase/setting-firebase.js';
import singIn from './view-routes/singIn.js';

window.onload = settingFirebase();

const pagOne = document.getElementById('log-in');
pagOne.innerHTML = '';
pagOne.appendChild(singIn());