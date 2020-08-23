import React from "react"
import {connect} from "react-redux";
import { compose } from 'redux';
import {withRouter} from "react-router-dom";
import Header from "./Header";
import {logout} from '../../redux/authReducer'

const HeaderContainer = (props) => {

    return (
        <Header {...props}/>
    )
}

let mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        imgSrc: state.auth.imgSrc,
        isAuth: state.auth.isAuth
    }
}

export default compose(
    connect(mapStateToProps, {logout}),
    withRouter
)(HeaderContainer)
