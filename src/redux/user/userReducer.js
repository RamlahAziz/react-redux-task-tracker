import * as actionTypes from "./userTypes";

const initialState = {
    loading: true,
    data: [],
    error: "",
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_USERS_REQUEST:
            // console.log("state", state);
            return {
                ...state,
                loading: true,
            };

        case actionTypes.FETCH_USERS_SUCCESS:
            // console.log("state", state);
            // console.log(state.tasks, action.payload.id);
            return {
                loading: false,
                users: action.payload,
                error: "",
            };

        case actionTypes.FETCH_USERS_FAILURE:
            return {
                loading: false,
                users: [],
                error: action.payload, //action.payload.
            };

        default:
            return state;
    }
};

export default userReducer;
