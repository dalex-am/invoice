import React from "react"
import {connect} from "react-redux";
import { compose } from 'redux';
import Sidebar from "./Sidebar";
import {logout} from '../../redux/authReducer'

const SidebarContainer =(props) => {

    return (
        <Sidebar {...props}/>
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
    connect(mapStateToProps, {logout})
)(SidebarContainer)
