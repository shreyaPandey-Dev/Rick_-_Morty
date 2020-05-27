import React from "react";

import style from './Header.css'

const Header = props => {
    return (
        <nav className={style.navbardiv}>
            <span className="navbar-brand mb-1 h1 ml-4">Rick and Morty</span>
        </nav>
    );
};



export default Header;