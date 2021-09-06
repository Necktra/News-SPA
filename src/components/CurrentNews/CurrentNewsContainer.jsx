import React from "react";
import { connect } from "react-redux";
import CurrentNews from "./CurrentNews";
import { getCurrentNews } from '../../redux/currentNews-reducer';
// import Preloader from './../common/Preloader';
import Preloader from '../common/Preloader';
import { withRouter } from "react-router-dom";
import CommentsContainer from "../Comments/CommentsContainer";

class CurrentNewsContainer extends React.Component {

    componentDidMount() {
        //debugger;
        this.props.getCurrentNews(this.props.props.match.params.newsId);
    }

    render() {
        //debugger;
        return (<>
        {this.props.isFetching ? <Preloader /> : null}
        <CurrentNews news={this.props.currentNews}/>

        {/* <CommentsContainer/> */}
        {/* {this.props.parentComments.map(comment => {
           return <Comments comment={comment}/>
        })} */}



        
        </>)
    }
}

let mapStateToProps = (state) => {
    return {
        currentNews: state.currentNewsPage.currentNews,
        //parentComments: state.currentNewsPage.parentComments,
        isFetching: state.currentNewsPage.isFetching,
    }
}

//let WithUrlDataContainerComponent = withRouter(NewsContainer);

export default connect(mapStateToProps,
    {
         getCurrentNews,
    }
)(CurrentNewsContainer);