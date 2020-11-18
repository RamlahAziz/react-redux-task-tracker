import React, { useEffect } from "react";
import { fetchUsers } from "../redux/user/userActions";
import { useSelector, useDispatch } from "react-redux";

export default function UserContainer() {
    const userData = useSelector(state => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    return (
        <div className="wrapper">
            {userData.loading ? (
                <h2>Loading</h2>
            ) : userData.error ? (
                <h2>{userData.error}</h2>
            ) : (
                <div>
                    <h2>User List</h2>
                    <div>
                        {userData &&
                            userData.users &&
                            userData.users.map(user => (
                                <p className="list" key={user.id}>
                                    {user.name}
                                </p>
                            ))}
                    </div>
                </div>
            )}
        </div>
    );
}
