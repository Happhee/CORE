import { request } from '../utils/axios';
import {
    LOGIN_USER, REGISTER_USER, GET_USER, GET_USERS, AUTH_USER
} from './types';

const USER_URL = "/user";

//로그인
export function loginUser(dataToSubmit) {

    const data = request("GET", USER_URL + "/login", dataToSubmit);

    return {
        type: LOGIN_USER,
        payload: data,
    }
}
//회원가입
export function registerUser(dataToSubmit) {

    const data = request("post", USER_URL + "/register", dataToSubmit);

    return {
        type: REGISTER_USER,
        payload: data,
    }
}
//강의실 불러오기 
export function getUser(dataToSubmit) {
    const data = request("GET", USER_URL, dataToSubmit)

    return {
        type: GET_USER,
        payload: data,
    }
}
export function getUsers() {
    const data = request("GET", USER_URL + "s")
    return {
        type: GET_USERS,
        payload: data,
    }
}
