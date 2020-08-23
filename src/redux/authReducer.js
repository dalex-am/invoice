import { stopSubmit } from "redux-form"
import {authLogin} from "../api/api"

const SET_USER_DATA = 'SET_USER_DATA'
const SET_IS_LOADING = 'SET_IS_LOADING'

let initialState = {
    login: 'Name on GitHub',
    imgSrc: '',
    isAuth: false,
    isLoading: false
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
                }
        case SET_IS_LOADING:
            return {
                ...state, 
                isLoading: action.isLoading
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

export const setIsLoading = (isLoading) => {
    return {type: SET_IS_LOADING, isLoading}
}

export const login = (login) => async (dispatch) => {

    let response = await authLogin(login)
    if (!response) {  
        dispatch(stopSubmit("login", {_error: "Пользователь не найден"})) 
        toggleIsLoading(false)
    } else {
        dispatch(setUserData(login, response.data.avatar_url, true))
        toggleIsLoading(false)
    }
}

export const logout = () => (dispatch) => {    
    dispatch(setUserData(null, null, null, false)) 
    dispatch(toggleIsLoading(false))
} 

export const toggleIsLoading = (isLoading) => (dispatch) => {
    dispatch(setIsLoading(isLoading))
}


export default authReducer