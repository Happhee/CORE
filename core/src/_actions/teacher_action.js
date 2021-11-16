import { request } from '../utils/axios';
import {
    CREATE_CLASSROOM,
    ADD_CLASSROOM,
    GET_STUDENT_LIST
} from './types';

const TEACHER_URL = "/api/teacher";


export function addClassroom(dataToSubmit) {

    const data = request("PUT", TEACHER_URL + "/classroom", dataToSubmit);

    return {
        type: ADD_CLASSROOM,
        payload: data,
    }
}

export function createClassroom(dataToSubmit) {
    const data = request("POST", TEACHER_URL + "/classroom", dataToSubmit);

    return {
        type: CREATE_CLASSROOM,
        payload: data,
    }
}

export function getStudentlist(dataToSubmit, class_id) {
    const data = request("GET", TEACHER_URL + "/studentlist/" + class_id, dataToSubmit);

    return {
        type: GET_STUDENT_LIST,
        payload: data,
    }
}
