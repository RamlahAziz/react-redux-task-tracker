import React, { useEffect } from "react";
import { fetchUser } from "../redux/user/userActions";
import { useSelector, useDispatch } from "react-redux";

export default function UserDetails() {
    const userData = useSelector(state => state.user);
    const id = useSelector(state => state.user.selected);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUser(id));
    }, [dispatch, id]);

    return (
        <div className="wrapper">
            {userData.loading ? (
                <h2>Loading</h2>
            ) : userData.error ? (
                <h2>{userData.error}</h2>
            ) : (
                <div>
                    <h2>User Details</h2>
                    <div>
                        {userData && userData.user.id && (
                            <section className="details">
                                <h3>
                                    {userData.user.id}. {userData.user.name}
                                </h3>
                                <p>Username: {userData.user.username}</p>
                                <p>Email: {userData.user.email}</p>
                                <p>Website: {userData.user.website}</p>
                                <p>Phone: {userData.user.phone}</p>
                                <p>Company: {userData.user.company.name}</p>
                                <p>City: {userData.user.address.city}</p>
                            </section>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
