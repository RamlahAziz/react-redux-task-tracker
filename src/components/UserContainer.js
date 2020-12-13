import React, { useEffect } from "react";
import { fetchUsers, selectUser } from "../redux/user/userActions";
import { useSelector, useDispatch } from "react-redux";

export default function UserContainer(props) {
    const userList = useSelector((state) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    const handleClick = (e, id) => {
        e.preventDefault();
        dispatch(selectUser(id));
        props.history.push("/userdetails");
    };

    return (
        <div className='wrapper'>
            {userList.loading ? (
                <h2>Loading</h2>
            ) : userList.error ? (
                <h2>{userList.error}</h2>
            ) : (
                <div>
                    <h2>User List</h2>
                    <div>
                        {userList &&
                            userList.users &&
                            userList.users.map((user) => (
                                <p
                                    className='list'
                                    key={user.id}
                                    onClick={(e) => handleClick(e, user.id)}
                                >
                                    {user.name}
                                </p>
                            ))}
                    </div>
                </div>
            )}
        </div>
    );
}
