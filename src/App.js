import React from "react";
import { Routes, Route } from "react-router-dom"

// components
import Home from "./components/Home"
import ToDoList from "./components/ToDoList"

const App = () => {
    return (
        <div className="app-main">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/todolist" element={<ToDoList />} />
            </Routes>
        </div>
    )
}

export default App