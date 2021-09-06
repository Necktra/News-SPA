import { Button } from "bootstrap";
import React from "react";
import { Card } from "react-bootstrap";
import { Link, NavLink } from 'react-router-dom';


let Comments = (props) => {
    //debugger;
    return <div>
{props.comments}
Коммент

    </div>
}



export default Comments;