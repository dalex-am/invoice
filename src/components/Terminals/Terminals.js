import React from 'react'
import classes from './Terminals.module.css'
import { Field, reduxForm } from 'redux-form'
import { required } from '../../utils/valid/validators'
import TerminalElement from './TerminalElement'

const Terminals = (props) => {

    let terminalElements = props.terminals.map(
        elem => {
            return  <TerminalElement id={elem.id} terminal={elem.terminal} description={elem.description} 
            deleteTerminal={props.deleteTerminal}/>
        }
    )

    let addTerminal = (values) => {
        props.addTerminal(values.newTerminal, values.newDescription)
        console.log(values)
        values.newTerminal = ""
        values.newDescription = ""
    }
    return (
        <div className={classes.terminals}>
            <h3>Список терминалов</h3>
            <TerminalInputRedux onSubmit={addTerminal}/>
            <br />
            <div className={classes.terminalRow}>
                <div>Терминал</div>
                <div>Описание</div>
                <div>Удалить</div>
            </div>
            <hr></hr>
            {terminalElements}

            
        </div>
    )
}

const TerminalInput = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={classes.newPost}>
            <Field component={"input"} className={classes.inputTerminal} 
                    name="newTerminal" placeholder="Название терминала" 
                    validate={[required]} />
            <Field component={"input"} className={classes.inputDescription}
                    name="newDescription" placeholder="Описание терминала" 
                    validate={[required]} />
            <button  >Добавить</button>
        </form>
    )
}

const TerminalInputRedux = reduxForm({form: 'addTerminal'})(TerminalInput)

export default Terminals