import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Header.module.css';
import {PATH} from '../Routes/Routes';

const Header = () => {
    return (
        <div className={s.dropdown}>
            <button className={s.dropbtn}>NavBar</button>
            <div className={s.dropdownContent}>
                <NavLink className={s.navlink} to={PATH.LOGIN_PAGE}>Login</NavLink>
                <NavLink className={s.navlink} to={PATH.REGISTRATION}>Registration</NavLink>
                <NavLink className={s.navlink} to={PATH.PROFILE_PAGE}>Profile</NavLink>
                <NavLink className={s.navlink} to={PATH.ERROR_404}>Error404</NavLink>
                <NavLink className={s.navlink} to={PATH.PASSWORD_RECOVERY}>PASSWORD_RECOVERY</NavLink>
                <NavLink className={s.navlink} to={PATH.ENTER_NEW_PASSWORD}>ENTER_NEW_PASSWORD</NavLink>
                <NavLink className={s.navlink} to={PATH.TEST_PAGE}>Test page</NavLink>
            </div>
        </div>
    );
};

export default Header;