import "./Card.scss";

const Card = ({ cardClassName, children }) => {
    return <div className={cardClassName}>{children}</div>;
};

export default Card;