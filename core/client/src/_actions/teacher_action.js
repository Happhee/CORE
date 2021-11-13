import { request } from '../utils/axios';
import {
    REGISTER_CLASSROOM
} from './types';

const TEACHER_URL = "/api/teacher";

//로그인
export function loginUser(dataToSubmit) {

    const data = request("PUT", TEACHER_URL + "/classroom", dataToSubmit);

    return {
        type: REGISTER_CLASSROOM,
        payload: data,
    }
}
