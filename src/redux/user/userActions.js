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

const fetchUsersFailure = error => {
    return {
        type: actionTypes.FETCH_USERS_FAILURE,
        payload: error,
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
                // fetch successful
                const users = response.data;
                dispatch(fetchUsersSuccess(users));
            })
            .catch(error => {
                const errorMsg = error.message;
                dispatch(fetchUsersFailure(errorMsg));
            });
    };
};
