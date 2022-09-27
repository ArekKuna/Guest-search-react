import React, { useState, useEffect } from "react";

import Card from "../UI/Card/Card";
import Loader from "../UI/Loader/Loader";

import "./GuestsList.scss";

const GuestsList = ({onInput}) => {

    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = () => {
        setIsLoading(true);
        fetch("https://fakestoreapi.com/users")
            .then((res) => res.json())
            .then((data) => {
                setIsLoading(false);
                setUsers(data);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    const filteredUsers = users.filter((guest) => {
        return (
            guest.name.firstname
                .toLowerCase()
                .includes(onInput.toLowerCase()) ||
            guest.name.lastname
                .toLowerCase()
                .includes(onInput.toLowerCase())
        );
    });

    return (
        <>
            {isLoading && (
                <Loader
                    BoxClassName="loader"
                    paragraphClassName="loader__content"
                    text="Just a moment we are loading your guests list"
                />
            )}
            {!isLoading && (
                <ul className="guests-list">
                    {filteredUsers.map((user) => (
                        <Card cardClassName="card card--guest" key={user.id}>
                            <li className="guests-list-item">
                                <div className="guests-list__card">
                                    <div className="guests-list__image">
                                        <div>PHOTO</div>
                                    </div>
                                    <div className="guests-list__data">
                                        <div>{user.name.firstname}</div>{" "}
                                        <div>{user.name.lastname}</div>
                                    </div>
                                    <div className="guests-list__adress">
                                        <div>{user.address.street}</div>
                                        <div>{user.address.city}</div>
                                        <div>{user.address.zipcode}</div>
                                    </div>
                                    <div className="guests-list__contact">
                                        <div>{user.phone}</div>
                                        <div>{user.email}</div>
                                    </div>
                                </div>
                            </li>
                        </Card>
                    ))}
                </ul>
            )}
        </>
    );
}

export default GuestsList;