import { request } from '../utils/axios';
import {
    LOGIN_USER, REGISTER_USER, AUTH_USER
} from './types';

const USER_URL = "/api/user";

export function loginUser(dataToSubmit) {

    const data = request("post", USER_URL + "/login", dataToSubmit);

    return {
        type: LOGIN_USER,
        payload: data,
    }
}

export function registerUser(dataToSubmit) {

    const data = request("post", USER_URL + "/register", dataToSubmit);


    return {
        type: REGISTER_USER,
        payload: data,
    }
}

export function auth() {

    const data = request("post", USER_URL + "/auth");


    return {
        type: AUTH_USER,
        payload: data
    }
}