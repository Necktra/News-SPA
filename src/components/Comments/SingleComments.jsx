import { Button } from "bootstrap";
import React from "react";
import { Card } from "react-bootstrap";
import { Link, NavLink } from 'react-router-dom';
import CommentsContainer from "./CommentsContainer";


let SingleComments = (props) => {

    // {
    //     if (props.openNestedComments.length > 0) {
    //         debugger;
    //     }
    // }

    //debugger;
    return <div>
        <Card className="text-center">
            <Card.Body>
                <Card.Title>by {props.comments.by} time: {props.comments.time}</Card.Title>
            </Card.Body>
            <Card.Footer className="text-muted">{props.comments.text}</Card.Footer>

            {<button onClick={() => {
                props.getNestedComments(props.comments.id);
            }}>Show more</button>}

        </Card>



        {/* {props.comments.kids && (props.comments.kids.map(comment => {
                return <CommentsContainer />
            }))} */}


    </div>
}



export default SingleComments;