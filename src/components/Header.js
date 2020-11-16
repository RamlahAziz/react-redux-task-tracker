import React from "react";
import { setShowPendingTasks } from "../redux/task/taskActions";
import { useSelector, useDispatch } from "react-redux";

export default function Header() {
    const showPendingTasks = useSelector(state => state.showPendingTasks);
    const dispatch = useDispatch();

    return (
        <div className="tab">
            <h2 className="title">
                {showPendingTasks ? "Pending Tasks" : "Completed Tasks"}
            </h2>
            <button
                className={`showPending ${showPendingTasks ? "active" : ""}`}
                onClick={() => dispatch(setShowPendingTasks(true))}>
                Pending
            </button>
            <button
                className={`showCompleted ${showPendingTasks ? "" : "active"}`}
                onClick={() => dispatch(setShowPendingTasks(false))}>
                Completed
            </button>
        </div>
    );
}

// const mapStateToProps = state => {
//     return {
//         showPendingTasks: state.showPendingTasks,
//     };
// };

// const mapDispatchToProps = dispatch => {
//     return {
//         setShowPendingTasks: status => dispatch(setShowPendingTasks(status)),
//     };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Header);
