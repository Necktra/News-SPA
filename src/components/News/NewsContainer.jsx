import React from "react";
import { connect } from "react-redux";
import News from "./News";
import { getNews, getTimeout } from './../../redux/news-reducer';
import classes from './News.module.css';

class NewsContainer extends React.Component {

    componentDidMount() {
        this.props.getNews();

        this.updatesChecking = setInterval(() => this.props.getNews(), 60000);

    }

    componentWillUnmount() {
        //this.props.getNews();
        clearInterval(this.updatesChecking);
        //    let checkUpdates =  setInterval(() => this.props.getNews(), 10000);
    }

    render() {

        return (<>

            <div className={classes.buttonWrapper}>
            <button className={classes.buttonStyle} disabled={this.props.isFetching} onClick={() => {
                // props.follow(u.id);
                clearInterval(this.updatesChecking);
                this.props.getNews();
                this.updatesChecking = setInterval(() => this.props.getNews(), 60000);
            }}>
                {(this.props.isFetching) ?
                    "Updating..." : "Update news page"}
            </button>
            </div>

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