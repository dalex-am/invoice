import React from 'react'
import classes from './Header.module.css'
import { NavLink } from 'react-router-dom'
import avatar from '../../assets/images/avatar.jpg'

const Header = (props) => {

    return (
        <div className={classes.header}>
            <div className={classes.avatar}>
                {props.isAuth
                ? <img src={props.imgSrc} alt="avatar"></img>
                : <img src={avatar} alt="avatar"></img>}
            </div>
            <div className={classes.links}>
                <div className={classes.item}>
                    <NavLink to="/terminals" activeClassName={classes.active}> Терминалы </NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/buyers" activeClassName={classes.active}> Покупатели </NavLink>
                </div>
                {props.login}-{props.isAuth && <button onClick={props.logout}>logout</button> }
            </div>
        </div>
    )
}

export default Header