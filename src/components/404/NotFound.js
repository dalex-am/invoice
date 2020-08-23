import React from 'react'
import error404 from '../../assets/images/404error.jpg' 
import classes from './NotFound.module.css'

const NotFound = (props) => {
    return (
        <div>
            <h3>Запрашиваемая страница не найдена</h3>
            <div className={classes.error} >
                <img src={error404} alt="Ошибка 404"></img>
            </div>
        </div>
    )
}

export default NotFound