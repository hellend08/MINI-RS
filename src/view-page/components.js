import singIn from './singIn.js'
import {newUser} from './registry.js'
import {viewHome} from './home.js'

export const componentsObject = {
    singIn: singIn,
    registry: newUser,
    home: viewHome
}