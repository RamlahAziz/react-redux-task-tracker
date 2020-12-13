import React, { useState } from "react";
import "./App.css";
import ToDo from "./components/ToDo";
import UserContainer from "./components/UserContainer";
import Navbar from "./components/Navbar";
import UserDetails from "./components/UserDetails";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className='App'>
                <Navbar />
                <Route exact path='/' component={ToDo} />
                <Route path='/users' component={UserContainer} />
                <Route path='/userdetails' component={UserDetails} />
            </div>
        </BrowserRouter>
    );
}

export default App;

// function App() {
//     const [showToDo, setShowToDo] = useState(true);
//     // always pass the function to setter if you are updating state based on old state
//     const handleClick = () => setShowToDo(showToDo => !showToDo);
//     return (
//         <div className="App">
//             {showToDo ? <ToDo /> : <UserContainer />}
//             <button class="appDisplayButton" onClick={handleClick}>
//                 {showToDo ? "Fetch Users" : "Hide Users"}
//             </button>
//         </div>
//     );
// }

// export default App;
