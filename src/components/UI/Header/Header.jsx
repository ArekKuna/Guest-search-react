import React, { useState, useContext } from "react";
import ReactDOM from "react-dom";

import Logo from "../Logo/Logo";
import Title from "./Title/Title";
import HeaderNavigation from "../HeaderNavigation/HeaderNavigation";
import Button from "../Button/Button";
import LoginFormModal from "../LoginFormModal/LoginFormModal";
import AuthContext from "../../Store/Auth-context";

import "./Header.scss";

const Header = () => {
    
    const [openLoginForm, setOpenLoginForm] = useState(false);

    const ctxAuth = useContext(AuthContext)

    const handleOpenLoginFormModal = () => {
        setOpenLoginForm(true);
    };

    const handleBackdropClose = () => {
        setOpenLoginForm(false);
    };

    const handleLogin = () => {
        setOpenLoginForm(false);
        ctxAuth.onLogin();
    };

    const handleLogout = () => {
        ctxAuth.onLogout();
    };

    const handleCancelClick = () => {
        setOpenLoginForm(false);
    };

    return (
        <header className="header">
            {!ctxAuth.isLoggedIn && (
                <>
                    <Logo boxClassName="logo" imgClassName="logo__image" />
                    <Title
                        text="Check-in APP"
                        boxClassName="header__title"
                        titleClassName="header__text"
                    />
                    <Button
                        boxClassName="button"
                        buttonClassName="button__btn"
                        type="button"
                        text="Login"
                        onClick={handleOpenLoginFormModal}
                    />
                </>
            )}
            {ctxAuth.isLoggedIn && (
                <>
                    <Logo boxClassName="logo" imgClassName="logo__image" />
                    <Title
                        text="Check-in APP"
                        boxClassName="header__title"
                        titleClassName="header__text"
                    />
                    <HeaderNavigation
                        navClassName="navigation"
                        listClassName="navigation__list"
                        itemClassName="navigation__item"
                        linkClassName="navigation__link"
                        linkText1="Home"
                        linkText2="Users"
                        linkText3="About"
                        linkText4="Contact"
                    />
                    <Button
                        boxClassName="button"
                        buttonClassName="button__btn"
                        type="button"
                        text="Logout"
                        onClick={handleLogout}
                    />
                </>
            )}
            {openLoginForm &&
                ReactDOM.createPortal(
                    <LoginFormModal
                        onBackdropClick={handleBackdropClose}
                        onCancel={handleCancelClick}
                        onConfirm={handleLogin}
                    />,
                    document.getElementById("login-form-modal")
                )}
        </header>
    );
};

export default Header;