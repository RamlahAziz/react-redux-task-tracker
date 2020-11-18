import React, { useState } from "react";
import { addTask } from "../redux/task/taskActions";
import { useDispatch } from "react-redux";

export default function Form() {
    const [text, setText] = useState("");
    const [color, setColor] = useState("#f58f29");

    const handleTextChange = e => setText(e.target.value);

    const handleColorChange = e => setColor(e.target.value);

    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();

        dispatch(addTask(text, color));
        e.target.reset();
    };

    return (
        <form className="add-tasks" onSubmit={handleSubmit}>
            <input
                type="text"
                name="task"
                placeholder="Enter Task"
                // value={text}
                onChange={handleTextChange}
                required
            />
            <div className="colordiv" style={{ background: color }}>
                <input
                    type="color"
                    name="color"
                    defaultValue={color}
                    onChange={handleColorChange}
                    required
                />
            </div>

            <input type="submit" value="+ Add Task" />
        </form>
    );
}

// accepts ownProps as second Function
// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {
//         addTask: (text, color) => dispatch(addTask(text, color)),
//     };
// };

// don't want to subscribe to store updates
// export default connect(null, mapDispatchToProps)(Form);
