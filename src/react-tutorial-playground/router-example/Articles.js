import React from 'react';
import { Link } from 'react-router-dom';


const Articles = () => (
    <div>
        <h1></h1>
        <ul>
            <li><Link to="/article/banana">Banana</ Link></li>
            <li><Link to="/article/moshe">Moshe</ Link></li>
            <li><Link to="/article/meir">Meir</ Link></li>
        </ul>
    </div>
);

export default Articles;