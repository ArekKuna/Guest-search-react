const Title = ({boxClassName, titleClassName ,text}) => {
    return (
        <div className={boxClassName}>
            <h1 className={titleClassName}>{text}</h1>
        </div>
    )
}

export default Title;