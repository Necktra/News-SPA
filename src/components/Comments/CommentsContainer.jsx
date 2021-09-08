import React from "react";
import { connect } from "react-redux";
import Comments from "./Comments";
import { getNestedComments, getComments } from '../../redux/comments-reducer';
import { Card } from "react-bootstrap";
import classes from './SingleComments.module.css';

class CommentsContainer extends React.Component {

    componentDidMount() {
        //debugger;
        this.props.getComments(this.props.props.match.params.newsId);
        //this.props.parentComments.length !== 0 && this.props.getComments(this.props.parentComments);
      this.updatesChecking = setInterval(() => this.props.getComments(this.props.props.match.params.newsId), 60000);

    }

    componentWillUnmount() {
        //this.props.getNews();
        clearInterval(this.updatesChecking);
        //    let checkUpdates =  setInterval(() => this.props.getNews(), 10000);
    }

    render() {

        return (<>

            {/* <button disabled={this.props.isFetching} onClick={() => {
                this.props.getComments(this.props.props.match.params.newsId);
            }}>Update comments</button> */}


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

            {/* {this.props.isFetching ? <Preloader /> : null} */}

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