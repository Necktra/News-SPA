import React from "react";
import { connect } from "react-redux";
import SingleComments from "./Comments";
// import { getComments } from '../../redux/comments-reducer';
import { getNestedComments, getComments } from '../../redux/comments-reducer';
// import Preloader from './../common/Preloader';
import Preloader from '../common/Preloader';

class SingleCommentsContainer extends React.Component {

    componentDidMount() {
//debugger;
//this.props.getComments(this.props.comId);
       //this.props.getComments(this.props.props.match.params.newsId);
    }


    render() {

//debugger;
        return (<>
       

            {/* {this.props.currentCommentsBranch.map(comment => { */}

             
                return (<SingleComments comments={this.props.comment} key={this.props.comment}
                    getNestedComments={this.props.getNestedComments}
                    openNestedComments={this.props.openNestedComments.filter(el => {
                        //debugger;
                        return el.parentId === this.props.comment.id
                    })}
                />


                )
            {/* })} */}

        </>)
    }



}

let mapStateToProps = (state) => {
    return {
        openNestedComments: state.comments.openNestedComments,
    }
}

export default connect(mapStateToProps,
    {
      //  getComments,
        getNestedComments,
    }
)(SingleCommentsContainer);