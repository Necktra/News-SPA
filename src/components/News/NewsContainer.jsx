import React from "react";
import { connect } from "react-redux";
import News from "./News";
import { getNews, getTimeout } from './../../redux/news-reducer';
// import Preloader from './../common/Preloader';
import Preloader from './../common/Preloader';

// let updatesChecking = null;

class NewsContainer extends React.Component {

    componentDidMount() {
        this.props.getNews();

        // this.updatesChecking = setInterval(() => this.props.getNews(), 10000);
    }

    componentWillUnmount() {
        //this.props.getNews();
        // clearInterval(this.updatesChecking);
        //    let checkUpdates =  setInterval(() => this.props.getNews(), 10000);
    }

    render() {

        return (<>

            <button disabled={this.props.isFetching} onClick={() => {
                // props.follow(u.id);
                this.props.getNews();
            }}>
                {(this.props.isFetching) ?
                    "Updating..." : "Update news page"}


            </button>

            {/* {this.props.isFetching ? <Preloader /> : null} */}

            <News news={this.props.news} />

        </>)
    }
}

let mapStateToProps = (state) => {
    return {
        news: state.newsPage.news,
        isFetching: state.newsPage.isFetching,
        timer: state.newsPage.timer,
    }
}

export default connect(mapStateToProps,
    {
        getNews,
        getTimeout,
    }
)(NewsContainer);