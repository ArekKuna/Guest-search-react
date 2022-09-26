import "./HeaderNavigation.scss";

const HeaderNavigation = (props) => {
    const {
        navClassName,
        listClassName,
        itemClassName,
        linkClassName,
        linkText1,
        linkText2,
        linkText3,
        linkText4,
    } = props;
    return (
        <nav className={navClassName}>
            <ul className={listClassName}>
                <li className={itemClassName}>
                    <a href="home" className={linkClassName}>
                        {linkText1}
                    </a>
                </li>
                <li className={itemClassName}>
                    <a href="users" className={linkClassName}>
                        {linkText2}
                    </a>
                </li>
                <li className={itemClassName}>
                    <a href="about" className={linkClassName}>
                        {linkText3}
                    </a>
                </li>
                <li className={itemClassName}>
                    <a href="contact" className={linkClassName}>
                        {linkText4}
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default HeaderNavigation;