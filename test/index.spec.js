// configurando firebase mock
const firebasemock = require('firebase-mock');
const mockauth = new firebasemock.MockFirebase();
const mockfirestore = new firebasemock.MockFirestore();
mockfirestore.autoFlush();
mockauth.autoFlush();

global.firebase = firebasemock.MockFirebaseSdk(
  // use null if your code does not use RTDB
  path => (path ? mockdatabase.child(path) : null),
  () => mockauth,
  () => mockfirestore
);

// iniciando tests

import { registryFirebase, logInFirebase, logInFacebook, logInGmail, singOff } from '../src/firebase/controller-firebase.js';

describe('registryFirebase', () => {
  it('debería ser una funcion', () => {
    expect(typeof registryFirebase).toBe('function');
  });

  it('debería registrar nuevo usuario', () => {
    return registryFirebase('sccp.hvasquez@gmail.com', '123456').then((user) => {
      expect(user.email).toBe('sccp.hvasquez@gmail.com');
    });
  });
});

describe('logInFirebase', () => {
  it('debería ser una función', () => {
    expect(typeof logInFirebase).toBe('function');
  });
  it('debería iniciar sesión con un usuario existente', () => {
    return logInFirebase('sccp.hvasquez@gmail.com', '123456').then((user) => {
      expect(user.email).toBe('sccp.hvasquez@gmail.com');
    });
  });
});

describe('logInFacebook', () => {
  it('debería registrar con facebook', () => {
    return logInFacebook()
      .then((user) => {
        expect(user.isAnonymous).toBe(false);
      });
  });
});

describe('logInGmail', () => {
  it('debería registrar con gmail', () => {
    return logInGmail()
      .then((user) => {
        expect(user.isAnonymous).toBe(false);
      });
  });
});

describe('singOff', () => {
  it('debería cerrar sesión', () => {
    return singOff()
      .then((user) => {
        expect(user).toBe(undefined);
      });
  });
});