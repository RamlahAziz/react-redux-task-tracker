import React, { useState } from "react";
import ToDo from "./components/ToDo";
import "./App.css";
import UserContainer from "./components/UserContainer";

function App() {
    const [showToDo, setShowToDo] = useState(true);
    const handleClick = () => setShowToDo(showToDo => !showToDo);
    return (
        <div className="App">
            {showToDo ? <ToDo /> : <UserContainer />}
            <button class="appDisplayButton" onClick={handleClick}>
                {showToDo ? "Fetch Users" : "Hide Users"}
            </button>
        </div>
    );
}

export default App;
