import "./Title.scss";

const Title = ({titleBoxClass, contentClass, textClass}) => {
    return (
        <div className={titleBoxClass}>
            <h2 className={contentClass}>{textClass}</h2>
        </div>
    )
}

export default Title;