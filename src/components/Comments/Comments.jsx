import React from "react";
import { Card } from "react-bootstrap";
import SingleCommentsContainer from "./SingleCommentsContainer";
import classes from './Comments.module.css';
import { transformContentDate } from "../../services/transformContentDate";

let Comments = (props) => {
    //  debugger;
    return <div className={classes.commentsWrapper}>
        <Card className="text-right">

            <Card.Body className={classes.commentTitleWrap}>
                {(props.comments.deleted) ?
                    <Card.Title className={classes.commentTitle}>
                        This comment was deleted
                    </Card.Title>
                    :
                    <Card.Title className={classes.commentTitle}>
                        by <span className={classes.commentName}>{props.comments.by}</span> {transformContentDate(props.comments.time)}
                    </Card.Title>
                }
            </Card.Body>

            <Card.Footer className="text-muted">
                <div dangerouslySetInnerHTML={{ __html: props.comments.text }} />
                {props.comments.kids &&
                    <button className={classes.btn} idbtn={props.comments.id} onClick={(e) => {
                        // e.target.style.opacity = 0;
                        e.target.style.display = "none";
                        props.getNestedComments(props.comments.id);
                    }}>Show {props.comments.kids.length} replies</button>
                }

                {props.openNestedComments.map(el => {
                    return (
                        <div className={classes.wrap}>
                            <SingleCommentsContainer comment={el.nestComment} comId={el.nestComment.id} />
                        </div>
                    )
                }
                )
                }
            </Card.Footer>
        </Card>
    </div>
}

export default Comments;