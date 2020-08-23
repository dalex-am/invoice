import { stopSubmit } from "redux-form"
import {authLogin} from "../api/api"

const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
    login: 'Name on GitHub',
    imgSrc: '',
    isAuth: false
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
                }
        default:
            return state;
    }
}

export const setUserData = (login, imgSrc, isAuth) => {

    return {
        type: SET_USER_DATA,
        payload: {login, imgSrc, isAuth}
    }
}

export const login = (login) => async (dispatch) => {
    let response = await authLogin(login)
    if (!response) {  
        dispatch(stopSubmit("login", {_error: "Пользователь не найден"})) 
    } else {
        dispatch(setUserData(login, response.data.avatar_url, true))
    }
}

export const logout = () => (dispatch) => {    
    dispatch(setUserData(null, null, null, false))    
} 

export default authReducer