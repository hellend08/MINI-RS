// import {settingFirebase} from './firebase/setting-firebase.js';
import {chanceRoutes} from './firebase/routes.js';
// import {initRoutes} from './firebase/routes.js'

// window.onload = settingFirebase();

// const pagOne = document.getElementById('log-in');
// pagOne.innerHTML = '';
// pagOne.appendChild(singIn());

const init = () => {
    chanceRoutes(window.location.hash);
    window.addEventListener('hashchange', () => chanceRoutes(window.location.hash))
};

window.addEventListener('load', init);