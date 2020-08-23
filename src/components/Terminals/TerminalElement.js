import React from 'react'
import classes from './Terminals.module.css'
import deleteIcon from '../../assets/images/icon-delete.svg'

const TerminalElement = (props) => {

    let deleteTerminal = () => {
        props.deleteTerminal(props.id)
    }

    return (
        <div className={classes.terminalRow}>
            <div>{props.terminal}</div>
            <div>{props.description}</div>
            <div><img src={deleteIcon} onClick={deleteTerminal} alt="Удалить"></img></div>           
        </div>
    )
}

export default TerminalElement