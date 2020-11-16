import React from "react";
import { useSelector } from "react-redux";

export default function Task({ task }) {
    const showPendingTasks = useSelector(state => state.showPendingTasks);

    return (
        <div className="task" style={{ background: task.color }}>
            <p>{task.text}</p>
            {showPendingTasks && <button className="completed">✔</button>}
            <button className="remove">✖</button>
        </div>
    );
}

//
// const mapStateToProps = (state, ownProps) => {
//     // here ownProps is a task object
//     // even without ownProps, task is still passed in props to Task
//     return {
//         // can return state based on ownProps
//         showPendingTasks: state.showPendingTasks,
//     };
// };
// export default connect(mapStateToProps)(Task);
