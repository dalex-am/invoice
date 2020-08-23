import React from "react"
import {connect} from "react-redux";
import { compose } from 'redux';
import Terminals from "./Terminals";
import {addTerminal, deleteTerminal} from '../../redux/terminalsReducer'


const TerminalContainer = (props) => {

    return (
        <Terminals {...props}/>
    )
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        terminals: state.terminalsPage.terminals
    }
}

export default compose(
    connect(mapStateToProps, {addTerminal, deleteTerminal})
)(TerminalContainer)

