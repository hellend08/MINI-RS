import { componentsObject } from '../view-page/components.js';
import { getPost } from './controller-firebase.js'

export const chanceRoutes = (route) => {
    const firtsPage = document.getElementById("log-in");
    firtsPage.innerHTML = '';
    switch (route) {
        case '#/login': firtsPage.appendChild(componentsObject.singIn())
        break;
        case '#/registry': firtsPage.appendChild(componentsObject.registry())
        break;
        case '#/home' : {
            const viewfuncionCallback = (data) => {
                firtsPage.innerHTML = '';
                firtsPage.appendChild(componentsObject.home(data));
            }
            getPost(viewfuncionCallback);
        }
        break;
        default:
            firtsPage.appendChild(componentsObject.singIn());
        break;
    }
};

export const sendRoute = () => {
    // chanceRoutes(window.location.hash);
    window.addEventListener('load', () => chanceRoutes(window.location.hash))
    if (("onhashchange" in window)) window.onhashchange = () => chanceRoutes(window.location.hash)
};

    // window.addEventListener('load', init);
