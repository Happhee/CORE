/*eslint-disable */

import { CREATE_CLASSROOM, ADD_CLASSROOM, GET_STUDENT_LIST, ADD_PROBLEM } from '../_actions/types'

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

        case GET_STUDENT_LIST:
            return { ...state, getStudentlist: action.payload }
            break;

        case ADD_PROBLEM:
            return { ...state, addProblem: action.payload }
            break;

        default:
            return state;
    }
}