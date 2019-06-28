// configurando mock-cloud-firestore
import MockFirebase from 'mock-cloud-firestore';

const fixtureData = {
  __collection__: {
    post: {
      __doc__: {
        abc123: {
          post: 'nueva publicación',
          complete: true
        },
      }
    }
  }
};

global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });

// iniciando tests

import { postNotes, getPost, editPost, deletePost } from '../src/firebase/controller-firebase.js';
 
describe('postNotes', () => {
  it('Debería publicar una nota', (done) => {
    return postNotes('comer verduras en el almuerzo').then(() => {
      const callback = (post) => {
        const result = post.find((element) => {
          return element.post === 'comer verduras en el almuerzo';
        });
        expect(result.post).toBe('comer verduras en el almuerzo');
        done();
      };
      getPost(callback);
    });
  });
});

describe('editPost', () => {
  it('Debería tachar una nota y cambiar a true', (done) => {
    return editPost('abc123', 'comer verduras en el almuerzo', true).then(() => {
      const callback = (post) => {
        console.log(post);
        const result = post.find((element) => {
          return element.complete === false ;
        });
        expect(result.complete).toBe(false);
        done();
      };
      getPost(callback);
    });
  });
});

describe('deletePost', () => {
  it('Debería eliminar una nota', (done) => {
    return deletePost('abc123').then(() => {
      const callback = (post) => {
        const result = post.find((element) => {
          return element.id === 'abc123';
        });
        expect(result).toBe(undefined);
        done();
      };
      getPost(callback);
    });
  });
});