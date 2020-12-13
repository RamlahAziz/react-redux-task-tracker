import * as actionTypes from "./userTypes";
import axios from "axios";

const fetchUsersRequest = () => {
    return {
        type: actionTypes.FETCH_USERS_REQUEST,
    };
};

const fetchUsersSuccess = users => {
    return {
        type: actionTypes.FETCH_USERS_SUCCESS,
        payload: users,
    };
};

const fetchUserSuccess = user => {
    return {
        type: actionTypes.FETCH_USER_SUCCESS,
        payload: user,
    };
};

const fetchUsersFailure = error => {
    return {
        type: actionTypes.FETCH_USERS_FAILURE,
        payload: error,
    };
};

export const selectUser = id => {
    return {
        type: actionTypes.SELECT_USER,
        payload: id,
    };
};

// not like other action creators
// returns a function
export const fetchUsers = () => {
    // does not have to be pure
    return dispatch => {
        // set loading true
        dispatch(fetchUsersRequest);

        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                const users = response.data.map(({ id, name }) => ({
                    id,
                    name,
                }));
                dispatch(fetchUsersSuccess(users));
            })
            .catch(error => {
                const errorMsg = error.message;
                dispatch(fetchUsersFailure(errorMsg));
            });
    };
};

export const fetchUser = id => {
    return dispatch => {
        dispatch(fetchUsersRequest);
        axios
            .get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => {
                const user = response.data;
                dispatch(fetchUserSuccess(user));
            })
            .catch(error => {
                const errorMsg = error.message;
                dispatch(fetchUsersFailure(errorMsg));
            });
    };
};
