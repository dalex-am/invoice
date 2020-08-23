import classes from "./Preloader.module.css";
import preloader from "../../assets/preloader.gif";
import React from "react";

const Preloader = (props) => {
    return <div>
        <img className={classes.preloader} src={preloader} alt={'preloader'}/>
    </div>
}

export default Preloader