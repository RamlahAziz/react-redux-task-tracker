import * as actionTypes from "./taskTypes";

const initialState = {
    tasks: [],
    showPendingTasks: true,
};

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TASK:
            // console.log("state", state);
            return {
                ...state,
                tasks: [
                    ...state.tasks,
                    {
                        id: action.payload.id,
                        text: action.payload.text,
                        color: action.payload.color,
                        completed: false,
                    },
                ],
            };

        case actionTypes.DELETE_TASK:
            // console.log("state", state);
            // console.log(state.tasks, action.payload.id);
            return {
                ...state,
                tasks: [
                    ...state.tasks.filter(
                        task => task.id !== action.payload.id
                    ),
                ],
            };

        case actionTypes.TASK_COMPLETED:
            return {
                ...state,
                tasks: [
                    ...state.tasks.map(task =>
                        task.id === action.payload.id
                            ? { ...task, completed: true }
                            : task
                    ),
                ],
            };

        case actionTypes.SHOW_PENDING_TASKS:
            // console.log("state", state);
            return {
                ...state,
                showPendingTasks: action.payload.status,
            };

        default:
            return state;
    }
};

export default taskReducer;
