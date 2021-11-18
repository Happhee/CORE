import { request } from '../utils/axios';
import {
    CREATE_CLASSROOM,
    ADD_CLASSROOM,
    GET_STUDENT_LIST
} from './types';

const TEACHER_URL = "/api//teacher";

export function addClassroom(dataToSubmit) {

    const data = request("POST", TEACHER_URL + "/classroom", dataToSubmit);

    return {
        type: ADD_CLASSROOM,
        payload: data,
    }
}

export function createClassroom(dataToSubmit) {
    const data = request("POST", TEACHER_URL + "/class", dataToSubmit);

    return {
        type: CREATE_CLASSROOM,
        payload: data,
    }
}

export function getStudentlist(class_id) {
    const data = request("GET", "/api/class?class_id=" + class_id);

    return {
        type: GET_STUDENT_LIST,
        payload: data,
    }
}
