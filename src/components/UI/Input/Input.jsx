import "./Input.scss";

const Input = (props) => {
    const {
        inputBoxClassName,
        labelClassName,
        inputClassName,
        spanClassName,
        htmlFor,
        text,
        id,
        type,
        value,
        placeholder,
        onChange,
        onBlur,
        errorText,
    } = props;
    return (
        <div className={inputBoxClassName}>
            <label className={labelClassName} htmlFor={htmlFor}>
                {text}
            </label>
            <input
                className={inputClassName}
                id={id}
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                onBlur={onBlur}
            />
            {errorText && <span className={spanClassName}>{errorText}</span>}
        </div>
    );
}

export default Input;