import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink className="navbar-brand" to='/'>ToDoAPP</NavLink>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link" to='/todoList'>TodoList</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to='/todoListHooks'>TodoList with HOOKS</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;