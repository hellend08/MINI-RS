import {settingFirebase} from './firebase/setting-firebase.js';
import sumit from './view-routes/singIn.js';


window.onload = settingFirebase();

// buttonClick();

const pagOne = document.getElementById('log-in');
pagOne.innerHTML = '';
pagOne.appendChild(sumit());