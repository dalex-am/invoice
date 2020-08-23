import React from "react"
import Login from "./Login"
import {connect} from "react-redux";
import { compose } from 'redux';
import {login, toggleIsLoading} from '../../redux/authReducer'

const LoginContainer = (props) => {

    return (
        <Login {...props}/>
    )
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        isLoading: state.auth.isLoading
    }
}

export default compose(
    connect(mapStateToProps, {login, toggleIsLoading})
)(LoginContainer)
