import React from "react";
import { connect } from "react-redux";
import Comments from "./Comments";
import { getNestedComments, getComments } from '../../redux/comments-reducer';
import { Card } from "react-bootstrap";
import classes from './SingleComments.module.css';

class CommentsContainer extends React.Component {

    componentDidMount() {
        this.props.getComments(this.props.props.match.params.newsId);
        this.updatesChecking = setInterval(() => this.props.getComments(this.props.props.match.params.newsId), 60000);
    }

    componentWillUnmount() {
        clearInterval(this.updatesChecking);
    }

    render() {

        return (<>
            <div className={classes.buttonWrapper}>
                <button className={classes.buttonStyle} disabled={this.props.isFetching} onClick={() => {
                    clearInterval(this.updatesChecking);
                    this.props.getComments(this.props.props.match.params.newsId);
                    this.updatesChecking = setInterval(() => this.props.getComments(this.props.props.match.params.newsId), 60000);
                }}>
                    {(this.props.isFetching) ?
                        "Updating..." : "Update comments"}
                </button>
            </div>

            {(this.props.currentCommentsBranch.length === 0) &&
                <div className={classes.commentsWrapper}>
                    <Card className="text-right">
                        <Card.Body className={classes.commentTitleWrap}>

                            <Card.Title className={classes.commentTitle}>
                                No comments yet
                            </Card.Title>
                        </Card.Body>
                    </Card>
                </div>
            }

            {this.props.currentCommentsBranch.map(comment => {
                return (<Comments comments={comment} key={comment.id}
                    getNestedComments={this.props.getNestedComments}
                    openNestedComments={this.props.openNestedComments.filter(el => {
                        return el.parentId === comment.id
                    })} />
                )
            })
            }
        </>)
    }
}

let mapStateToProps = (state) => {
    return {
        isFetching: state.comments.isFetching,
        currentCommentsBranch: state.comments.currentCommentsBranch,
        openNestedComments: state.comments.openNestedComments,
    }
}

export default connect(mapStateToProps,
    {
        getComments,
        getNestedComments,
    }
)(CommentsContainer);