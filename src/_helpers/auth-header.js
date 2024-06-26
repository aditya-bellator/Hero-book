// import React from 'react'
// import  { Redirect } from 'react-router-dom'
// return <Redirect to='/login'  />

export function authHeader() {
    // return authorization header with jwt token

    let user = JSON.parse(localStorage.getItem('userMeta'));

    if (user && user.token) {
        return { 'Authorization': 'Bearer ' + user.token };
    } else {
        return {};
    }
}