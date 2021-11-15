/*eslint-disable */

import { CREATE_CLASSROOM, ADD_CLASSROOM } from '../_actions/types'

export default function (state = {}, action) {

    switch (action.type) {


        //강의실 처음 등록
        case CREATE_CLASSROOM:
            return { ...state, create: action.payload }
            break;

        //강의실 추가
        case ADD_CLASSROOM:
            return { ...state, register: action.payload }
            break;
        default:
            return state;
    }
}