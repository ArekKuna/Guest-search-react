import "./Button.scss";

const Button = (props) => {
    const { boxClassName, buttonClassName, type, onClick, text, disabled } = props;
    return (
        <div className={boxClassName}>
            <button
                className={buttonClassName}
                type={type}
                onClick={onClick}
                disabled={disabled}
            >{text}</button>
        </div>
    );
}

export default Button;