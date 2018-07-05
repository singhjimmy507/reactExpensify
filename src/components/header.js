import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

const Header = () => (
    <header>
    <h1>React is Awesome!</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard </NavLink>
    <NavLink to="/create" activeClassName="is-active" exact={true}>Create </NavLink>
    <NavLink to="/remove"activeClassName="is-active" exact={true}>Remove </NavLink>
    </header>
);

export default Header;
