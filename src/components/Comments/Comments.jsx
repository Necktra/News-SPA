import { Button } from "bootstrap";
import React from "react";
import { Card } from "react-bootstrap";
import { Link, NavLink } from 'react-router-dom';


let Comments = (props) => {
    //debugger;
    return <div>
{/* {props.comments} */}
Коммент
                <Card className="text-center">
                    <Card.Body>
                        <Card.Title>by {props.comments.by} time: {props.comments.time}</Card.Title>
                    </Card.Body>
                    <Card.Footer className="text-muted">{props.comments.text}</Card.Footer>
                </Card>
    </div>
}



export default Comments;