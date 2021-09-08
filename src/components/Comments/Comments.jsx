import React from "react";
import { Card } from "react-bootstrap";
import SingleCommentsContainer from "./SingleCommentsContainer";
import classes from './SingleComments.module.css';
import { transformContentDate } from "../../services/transformContentDate";

let Comments = (props) => {

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
                    <button className={classes.btn} disabled={props.openNestedComments.some(id => { return (id.parentId === props.comments.id) }) || props.nestIsFetching}
                        idbtn={props.comments.id} onClick={() => {
                            props.getNestedComments(props.comments.id);
                        }}>Show replies</button>
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