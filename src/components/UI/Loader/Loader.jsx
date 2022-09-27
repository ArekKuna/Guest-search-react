import "./Loader.scss";

const Loader = ({BoxClassName, paragraphClassName, text}) => {
    return (
        <div className={BoxClassName}>
            <p className={paragraphClassName}>{text}</p>
        </div>
    );
};

export default Loader;