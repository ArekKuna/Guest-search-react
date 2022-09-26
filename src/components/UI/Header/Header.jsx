import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import Logo from "../Logo/Logo";
import Title from "./Title/Title";
import HeaderNavigation from "../HeaderNavigation/HeaderNavigation";
import Button from "../Button/Button";
import LoginFormModal from "../LoginFormModal/LoginFormModal";

import "./Header.scss";

const Header = () => {

    const [openLoginForm, setOpenLoginForm] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("isLoggedIn")) {
            setIsLoggedIn(true);
            console.log("CHECK")
        }
    },[])

    const handleOpenLoginFormModal = () => {
        setOpenLoginForm(true);
    }

    const handleBackdropClose = () => {
        setOpenLoginForm(false);
    }

    const handleLogin = () => {
        setIsLoggedIn(true);
        setOpenLoginForm(false);
    }

    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        setIsLoggedIn(false)
    }

    const handleCancelClick = () => {
        setOpenLoginForm(false);
    }

    return (
        <header className="header">
            {!isLoggedIn && (
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
            {isLoggedIn && (
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
                        onClick={handleBackdropClose}
                        onCancel={handleCancelClick}
                        onConfirm={handleLogin}
                    />,
                    document.getElementById("login-form-modal")
                )}
        </header>
    );
}

export default Header;