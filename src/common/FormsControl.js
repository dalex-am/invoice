import React from 'react'
import classes from './FormsControl.module.css'

export const TextArea = ({input, meta, ...props}) => {

    let hasError = meta.error && meta.touched
    return (
        <div className={classes.formControl + " " + ( hasError ? classes.error : "")}>
            <div className={classes.input}>
                <input {...input} {...props} /> 
                { hasError && <div><span>{meta.error}</span></div>}
            </div>
        </div>
    )
}

export const Input = ({input, meta, ...props}) => {

    let hasError = meta.error && meta.touched
    return (
        <div className={classes.formControl + " " + ( hasError ? classes.error : "")}>
            <div className={classes.input}>
                <input {...input} {...props} /> 
                { hasError && <div><span>{meta.error}</span></div>}
            </div>
        </div>
    )
}

