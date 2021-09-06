import React from "react";
import { connect } from "react-redux";
import News from "./News";
import { getNews } from './../../redux/news-reducer';
// import Preloader from './../common/Preloader';
import Preloader from './../common/Preloader';

class NewsContainer extends React.Component {

    componentDidMount() {
        this.props.getNews();
    }

    // onPageChanged = (pageNumber) => {
    //     this.props.getUsers(pageNumber, this.props.pageSize);
    // }

    render() {
        //debugger;
        return (<>
            {this.props.isFetching ? <Preloader /> : null}
            <News news={this.props.news} />

        </>)
    }
}

let mapStateToProps = (state) => {
    return {
        news: state.newsPage.news,
        isFetching: state.newsPage.isFetching,
    }
}

export default connect(mapStateToProps,
    {
        getNews,
    }
)(NewsContainer);