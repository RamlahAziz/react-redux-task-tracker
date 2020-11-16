import React from "react";
import Form from "./Form";
import Task from "./Task";
import Header from "./Header";
import { deleteTask, completeTask } from "../redux/task/taskActions";
import { useSelector, useDispatch } from "react-redux";

export default function ToDo() {
    const tasks = useSelector(state => state.tasks);
    const showPendingTasks = useSelector(state => state.showPendingTasks);
    const dispatch = useDispatch();

    const handleClick = (e, id) => {
        // make sure the user has clicked the tick or cross button
        if (!e.target.matches("button")) return;
        // find out which button and list element was clicked
        const buttonClicked = e.target.classList.value;

        // take action
        if (buttonClicked === "completed") {
            dispatch(completeTask(id));
        } else if (buttonClicked === "remove") {
            dispatch(deleteTask(id));
        }
    };

    return (
        <div className="wrapper">
            <Header />
            <Form></Form>
            <ul className="tasks">
                {tasks &&
                    tasks
                        .filter(task => showPendingTasks === !task.completed)
                        .map(task => (
                            <li
                                key={task.id}
                                onClick={e => handleClick(e, task.id)}>
                                <Task task={task}></Task>
                            </li>
                        ))}
            </ul>
        </div>
    );
}

// step 1
// const mapStateToProps = state => {
//     return {
//         tasks: state.tasks,
//         showPendingTasks: state.showPendingTasks,

//         // separate file called selectors which gets things from the state
//     };
// };

// step 2
// map action creators to props
// const mapDispatchToProps = dispatch => {
//     return {
//         deleteTask: id => dispatch(deleteTask(id)),
//         completeTask: id => dispatch(completeTask(id)),
//     };
// };

// step 3
// export default connect(mapStateToProps, mapDispatchToProps)(ToDo);
