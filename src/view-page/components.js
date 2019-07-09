import { singIn } from './singIn.js';
import { viewHome } from './home.js';
import { viewregistry } from './registry.js';
import { viewProfile } from './profile.js';

export const componentsObject = {
  singIn: singIn,
  home: viewHome,
  profile: viewProfile,
  registry: viewregistry
};