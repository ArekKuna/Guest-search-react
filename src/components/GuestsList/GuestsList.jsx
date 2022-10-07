import React, { useState, useEffect } from "react";

import Card from "../UI/Card/Card";
import Loader from "../UI/Loader/Loader";

import "./GuestsList.scss";

const GuestsList = ({onInput}) => {

    const [guests, setguests] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = () => {
        setIsLoading(true);
        fetch('https://dummyjson.com/users?limit=100')
            .then((res) => res.json())
            .then((data) => {
                setIsLoading(false);
                setguests(data.users);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    const filteredUsers = guests.filter((guest) => {
        return (
            guest.firstName
                .toLowerCase()
                .includes(onInput.toLowerCase()) ||
            guest.lastName
                .toLowerCase()
                .includes(onInput.toLowerCase())
    )});

    return (
        <>
            {isLoading && (
                <Loader
                    BoxClassName="loader"
                    paragraphClassName="loader__content"
                    text="Just a moment we are loading your guests list..."
                />
            )}
            {!isLoading && (
                <ul className="guests-list">
                    {filteredUsers.map((user) => (
                        <Card cardClassName="card card--guest" key={user.id}>
                            <li className="guests-list-item">
                                <div className="guests-list__card">
                                    <div className="guests-list__image-box">
                                        <img className="guests-list__image" alt="user avatar" src={user.image}></img>
                                    </div>
                                    <div className="guests-list__data">
                                        <div>Name: {user.firstName}</div>
                                        <div>{user.lastName}</div>
                                    </div>
                                    <div className="guests-list__adress">
                                        <div>Street: {user.address.address}</div>
                                        <div>City: {user.address.city}</div>
                                    </div>
                                    <div className="guests-list__contact">
                                        <div>Phone: {user.phone}</div>
                                        <div>E-mail: {user.email}</div>
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