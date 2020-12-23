import React from 'react';
import { Link } from 'react-router-dom';

const Navitems = (props) => {
    return (
        <li id={props.item}>
            <Link to={props.tolink}>{props.item}</Link>
        </li>
    )
}

export default Navitems
