import logo from "./logo192.png";

import "./Logo.scss";

const Logo = ({ boxClassName, imgClassName }) => {
    return (
        <div className={boxClassName}>
            <img
                src={logo}
                alt="Guest Search Logo"
                className={imgClassName}
            />
        </div>
    );
};

export default Logo;