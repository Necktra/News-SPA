import React from "react";
import { connect } from "react-redux";
import News from "./CurrentNews";
import { getNews } from '../../redux/news-reducer';
// import Preloader from './../common/Preloader';
import Preloader from '../common/Preloader';
import { withRouter } from "react-router-dom";

class NewsContainer extends React.Component {

    componentDidMount() {
        debugger;
        this.props.getNews();
    }

    render() {
        debugger;
        return (<>
        {this.props.isFetching ? <Preloader /> : null}
        <News news={this.props.news}/>

        </>)
    }
}

let mapStateToProps = (state) => {
    return {
        news: state.newsPage.news,
        isFetching: state.newsPage.isFetching,
    }
}

let WithUrlDataContainerComponent = withRouter(NewsContainer);

export default connect(mapStateToProps,
    {
         getNews,
    }
)(WithUrlDataContainerComponent);