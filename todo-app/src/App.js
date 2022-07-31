import React, { } from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Form from "./components/form";
import TodoList from "./components/todoList";
import './style/style.css'

const App = () => {
    return (
        <BrowserRouter>
            <nav className="navbar navbar-dark bg-dark">
                <div className="row ">
                    <div className="col-3">
                        <div>
                            <span className="navbar-brand mb-0 h1 text-light p-2">Todo-App</span>
                        </div>
                    </div>
                    <div className="col-3"></div>
                    <div className="col-3">
                        <div className="hover-overlay">
                            <Link className="navbar-brand mb-0 h1 text-light p-2 ms-4" to='form' >form</Link>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="hover-overlay">
                            <Link className="navbar-brand mb-0 h1 text-light p-2 ms-4" to='todoList'>List</Link>
                        </div>
                    </div>
                </div>
            </nav>
            <Routes>
                <Route path="form" element={<Form />} />
                <Route path="todoList" element={<TodoList />} />
            </Routes>
        </BrowserRouter>
    )
}
export default App;