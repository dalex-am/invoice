import React from 'react'
import classes from './Login.module.css'
import { Redirect } from 'react-router-dom'
import { Field, reduxForm, submit } from 'redux-form'
import {required, minLengthCreator, password} from '../../utils/valid/validators'
import { Input } from '../../common/FormsControl'
import Preloader from '../Preloader/preloader'

let minLengthValidator = minLengthCreator(8)

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input} name="login" placeholder="login on github" 
                        validate={[required]} />
            </div>
            <div>
                <Field component={Input} type="password" name="password" placeholder="password" 
                        validate={[required, minLengthValidator, password]} />
            </div>
            {props.isLoading ?
                <div className={classes.btnSubmit}>
                    <button disabled="disabled">Добавить</button> <Preloader /> 
                </div>
                : <button>Добавить</button>
            }            
            {props.error && <div className={classes.summaryFormError}>
                {props.error}
            </div>}
        </form>
    )
}

const LoginInputRedux = reduxForm({form: 'login'})(LoginForm)


const Login = (props) => {

    if (props.isAuth) {
        return <Redirect to="/" />
    }

    let sendData = (formData) => { 
        props.toggleIsLoading(true)
        props.login(formData.login) 
    }

    return (
        <div className={classes.login}>
            Введите логин и пароль
            <LoginInputRedux onSubmit={sendData} {...props}/>
        </div>
    )
}


export default Login