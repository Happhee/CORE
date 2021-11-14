/*eslint-disable */

import { REGISTER_CLASSROOM } from '../_actions/types'

export default function (state = {}, action) {

    switch (action.type) {
        case REGISTER_CLASSROOM:
            return { ...state, register: action.payload }
            break;

        default:
            return state;
    }
}