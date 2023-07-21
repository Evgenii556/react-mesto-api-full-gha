import React from 'react';
import { Link, Routes, Route } from "react-router-dom";
import headerLogo from '../images/Logo1280.svg';

function Header({ userEmail, handleSingOut}) {
    return (
        <header className="header">
            <img className="header__logo" src={headerLogo} alt="MESTO"/>
            <Routes>
                <Route path='/sign-in' element={<Link to='/sign-up' className="header__link">Регистрация</Link>}/>
                <Route path='/sign-up' element={<Link to='/sign-in' className="header__link">Войти</Link>}/>
                <Route path='/' 
                    element={
                        <div className="header__container">
                            <p className="header__account">{userEmail}</p>
                            <p className="header__account header__account_exit" onClick={handleSingOut}>Выйти</p>
                        </div>
                    } />
            </Routes>
        </header>
    );
}
export default Header;