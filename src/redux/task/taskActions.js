// Action Creators
// Add task
// Delete task
// Mark task as completed
// Show pending tasks : true / false

import * as actionTypes from "./taskTypes";

export const addTask = (text, color) => {
    // QUESTION ???
    const id = Date.now();
    return {
        type: actionTypes.ADD_TASK,
        payload: {
            id,
            text,
            color,
        },
    };
};

export const deleteTask = id => {
    return {
        type: actionTypes.DELETE_TASK,
        payload: {
            id,
        },
    };
};

export const completeTask = id => {
    return {
        type: actionTypes.TASK_COMPLETED,
        payload: {
            id,
        },
    };
};

export const setShowPendingTasks = (status = true) => {
    return {
        type: actionTypes.SHOW_PENDING_TASKS,
        payload: {
            status: status, //does not work status: status = true
        },
    };
};
