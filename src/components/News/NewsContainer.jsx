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
        
        return (<>
        {this.props.isFetching ? <Preloader /> : null}
        <News/>

        </>)
    }
}

let mapStateToProps = (state) => {
    return {
        news: state.newsPage.news,
        // pageSize: state.usersPage.pageSize,
        // totalUsersCount: state.usersPage.totalUsersCount,
        // currentPage: state.usersPage.currentPage,
        isFetching: state.newsPage.isFetching,
        // followingInProgress: state.usersPage.followingInProgress,
    }
}

export default connect(mapStateToProps,
    {
        // follow,
        // unfollow,
        // setCurrentPage,
        // toggleFollowingProgress,
         getNews,
    }
)(NewsContainer);