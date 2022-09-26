import "./Section.scss";

const Section = ({sectionClassName, children}) => {
    return (
        <section className={sectionClassName}>
            {children}
        </section>
    )
}

export default Section;