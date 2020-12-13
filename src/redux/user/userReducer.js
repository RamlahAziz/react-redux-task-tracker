import * as actionTypes from "./userTypes";

const initialState = {
    loading: true,
    users: [],
    selected: 0,
    user: {},
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
                ...state,
                loading: false,
                users: action.payload,
                error: "",
            };

        case actionTypes.FETCH_USERS_FAILURE:
            return {
                ...state,
                loading: false,
                users: [],
                user: {},
                error: action.payload, //action.payload.
            };

        case actionTypes.FETCH_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload,
                error: "",
            };

        case actionTypes.SELECT_USER:
            return {
                ...state,
                selected: action.payload,
            };

        default:
            return state;
    }
};

export default userReducer;
