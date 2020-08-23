import React from 'react'
import classes from './Sidebar.module.css'
import avatar from '../../assets/images/avatar.jpg'
import { NavLink } from 'react-router-dom'

const Sidebar = (props) => {

    return (
        <div className={classes.sidebar}>
            <div className={classes.avatar}>
                {props.isAuth
                ? <img src={props.imgSrc} alt="avatar"></img>
                : <img src={avatar} alt="avatar"></img>}
            </div>
            <div>
                {props.isAuth ? props.login : "-------"}
                <br />
                {props.isAuth && <button className={classes.btnLogout} onClick={props.logout}>logout</button> }
            </div>
            <div>
                <div className={classes.item}>
                    <NavLink to="/terminals" activeClassName={classes.active}>Терминалы</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/buyers" activeClassName={classes.active}>Покупатели</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/page-for-404" activeClassName={classes.active}>Ошибка 404</NavLink>
                </div>
            </div>
            <div>Copyright © 2020</div>             
        </div>
    )
}

export default Sidebar