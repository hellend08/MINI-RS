const firebase = () => {
  return {
    auth: () => {
      return {
        createUserWithEmailAndPassword: (email, password) => {
          return new Promise((relsolve) => {
            relsolve({email: email, password: password});
          });
        }
      };
    }
  };
};

export default jest.fn(() => {
  return firebase();
});