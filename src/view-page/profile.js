
export const viewProfile = () => {
  const sectionProfile = document.createElement('div');

  sectionProfile.innerHTML = `
    <img class="avatar" src="./images/profile.jpg" alt="profile">
    <textarea placeholder="Sobre mí..."></textarea>
    <button id="edit-profile">Editar datos</button>
    `;

  const editProfile = sectionProfile.querySelector('#edit-profile');
  editProfile.addEventListener('click', () => {
    sectionProfile.innerHTML = `
    <div>
    <p>Nombre Usuario:</p>
    <input type="text" placeholder="Name"></input>
    </div>`;

  });
    

  return sectionProfile;
};