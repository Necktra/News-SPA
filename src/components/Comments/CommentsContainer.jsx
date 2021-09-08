import React from "react";
import { connect } from "react-redux";
import Comments from "./Comments";
// import { getComments } from '../../redux/comments-reducer';
import { getNestedComments, getComments } from '../../redux/comments-reducer';
// import Preloader from './../common/Preloader';
import Preloader from '../common/Preloader';
import { Card } from "react-bootstrap";

import classes from './SingleComments.module.css';

class CommentsContainer extends React.Component {

    componentDidMount() {
        //debugger;
        this.props.getComments(this.props.props.match.params.newsId);
        //this.props.parentComments.length !== 0 && this.props.getComments(this.props.parentComments);
    }


    render() {

        return (<>

            <button disabled={this.props.isFetching} onClick={() => {
                this.props.getComments(this.props.props.match.params.newsId);
            }}>Update comments</button>


            {this.props.isFetching ? <Preloader /> : null}


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

                // debugger;    
                return (<Comments comments={comment} key={comment}
                    getNestedComments={this.props.getNestedComments}
                    openNestedComments={this.props.openNestedComments.filter(el => {
                        return el.parentId === comment.id
                    })}
                />


                )
            })}

        </>)
    }



}

let mapStateToProps = (state) => {
    return {
        //parentComments: state.currentNewsPage.parentComments,
        isFetching: state.comments.isFetching,
        currentCommentsBranch: state.comments.currentCommentsBranch,
        openNestedComments: state.comments.openNestedComments,
        //currentNews: state.currentNewsPage.currentNews,
    }
}

export default connect(mapStateToProps,
    {
        getComments,
        getNestedComments,
    }
)(CommentsContainer);