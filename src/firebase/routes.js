import {componentsObject} from '../view-page/components.js'

export const chanceRoutes = (route) => {
    const firtsPage = document.getElementById("log-in");
    firtsPage.innerHTML = ''; 

    switch (route) {
        case '#/login': {return firtsPage.appendChild(componentsObject.singIn())}
        case '#/registry': {return firtsPage.appendChild(componentsObject.registry())}
    
        // default:
        //     break;
    }
};
