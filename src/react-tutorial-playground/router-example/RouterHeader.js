import React from 'react';
import { NavLink } from 'react-router-dom';

const RouterHeader = () => (
    <div>
        <NavLink to="/home" activeClassName="active-link">Home</NavLink>  |   <NavLink to="/articles" activeClassName="active-link">Articles</NavLink>
    </div>
);

export default RouterHeader;