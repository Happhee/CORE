/*eslint-disable */

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '../_actions/user_action';

export default function (Component, option, adminRoute = null) {
    //null => 아무나 출입이 가능한 페이지
    //true => 로그인한 유저만 출입이 가능한 페이지
    //false=> 로그인한 유저는 출입 불가능한 페이지
    function AuthCheck(props) {
        const dispatch = useDispatch();
        //useEffect를 사용해서 초기 검증을 실행해준다
        useEffect(() => {
            dispatch(auth()).then((res) => {
                console.log(res);
            });
        }, []);

        // function AuthenticationCheck(props) {
        //     const dispatch = useDispatch();

        //     useEffect(() => {
        //         dispatch(auth()).then(res => {
        //             console.log(res);
        //             //로그인 하지 않은 상태
        //             if (!res.payload.isAuth) {
        //                 if (option) {
        //                     props.history.push('/')
        //                 }
        //             } else {
        //                 //로그인 한 상태
        //                 if (adminRoute && !res.payload.isAdmin) {
        //                     props.history.push('/classroom/teacher')
        //                 } else {
        //                     if (option === false)
        //                         props.history.push('/')
        //                 }
        //             }
        //         })
        //     }, [])

        return <Component />

    }

    return AuthCheck

}