
export const viewHome = () => {
    const sectionHome = document.createElement('section');

    const templateHome = `
    <input type="text" id="notes" placeholder="¿Qué estas pensando?">
    <button id="share-post">Share Note</button>
    `

    sectionHome.innerHTML = templateHome;
    const sharePost = sectionHome.querySelector('#share-post');
    const noteValue = sectionHome.querySelector('#notes');

    sharePost.addEventListener('click', () => {
        console.log(noteValue.value);
    });
    return sectionHome;
};