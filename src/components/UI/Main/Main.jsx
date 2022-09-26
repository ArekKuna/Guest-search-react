import React, {useState} from "react";

import Section from "../Section/Section";
import Card from "../Card/Card";
import Title from "../Title/Title";
import Input from "../Input/Input";

import "./Main.scss";

const Main = () => {    

    const [searchInput, setSearchInput] = useState("");

    const handleSearchInput = (event) => {
        setSearchInput(event.target.value);
    }

    return (
        <main className="main">
            <Section sectionClassName="section section--search">
                <Card cardClassName="card card--search">
                    <Title
                        titleBoxClass="title title--search"
                        contentClass="title__content"
                        textClass="Search guest"
                    />
                    <Input
                        inputBoxClassName="input input--search"
                        labelClassName="input__label"
                        inputClassName="input__input"
                        htmlFor="input-search"
                        id="input-search"
                        text="Search by first or last name"
                        type="text"
                        placeholder="Search..."
                        value={searchInput}
                        onChange={handleSearchInput}
                    />
                </Card>
            </Section>
            <Section sectionClassName="section section--guests">

            </Section>
        </main>
    );
}

export default Main;