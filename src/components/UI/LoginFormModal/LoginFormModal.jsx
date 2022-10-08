import React, {useState, useEffect} from "react";

import Button from "../Button/Button";
import Input from "../Input/Input";
import Card from "../Card/Card";

import "./LoginFormModal.scss";

const LoginFormModal = ({ onBackdropClick, onCancel, onConfirm }) => {
    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [emailIsValid, setEmailIsValid] = useState(1);
    const [passwordIsValid, setPasswordIsValid] = useState(1);
    const [isFormValid, setIsFormValid] = useState();

    useEffect(() => {
        setIsFormValid(
            emailInput.includes("@") && passwordInput.trim().length >= 7
        );
    }, [emailInput, passwordInput]);

    const handleEmailInput = (event) => {
        setEmailInput(event.target.value);
    };

    const handlePasswordInput = (event) => {
        setPasswordInput(event.target.value);
    };

    const handleEmailValidation = () => {
        setEmailIsValid(emailInput.includes("@"));
    };

    const handlePasswordValidation = () => {
        setPasswordIsValid(passwordInput.trim().length > 6);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setEmailInput("");
        setPasswordInput("");

        onConfirm();
    };

    const handleCloseLoginFormModal = () => {
        onCancel();
    };

    return (
        <>
            <div className="backdrop" onClick={onBackdropClick}></div>
            <Card cardClassName="card card--login-form">
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="login-form__header">
                        <h2 className="login-form__title">LOGIN</h2>
                    </div>
                    <div className="login-form__body">
                        <Input
                            inputBoxClassName="input"
                            labelClassName="input__label"
                            inputClassName="input__input"
                            text="e-mail"
                            htmlFor="email"
                            id="email"
                            type="email"
                            value={emailInput}
                            placeholder="e-mail..."
                            onChange={handleEmailInput}
                            onBlur={handleEmailValidation}
                            spanClassName="input__error"
                            errorText={
                                emailIsValid ? "" : "wrong e-mail adress"
                            }
                        />
                        <Input
                            inputBoxClassName="input"
                            labelClassName="input__label"
                            inputClassName="input__input"
                            text="password"
                            htmlFor="password"
                            id="password"
                            type="password"
                            value={passwordInput}
                            placeholder="password..."
                            onChange={handlePasswordInput}
                            onBlur={handlePasswordValidation}
                            spanClassName="input__error"
                            errorText={
                                passwordIsValid
                                    ? ""
                                    : "Password should have at least 7 characters"
                            }
                        />
                    </div>
                    <div className="login-form__footer">
                        <Button
                            boxClassName="button button--form"
                            buttonClassName="button__btn"
                            type="button"
                            text="Cancel"
                            onClick={handleCloseLoginFormModal}
                        />
                        <Button
                            boxClassName="button button--form"
                            buttonClassName="button__btn"
                            type="submit"
                            text="Confirm"
                            disabled={!isFormValid}
                        />
                    </div>
                </form>
            </Card>
        </>
    );
};

export default LoginFormModal;