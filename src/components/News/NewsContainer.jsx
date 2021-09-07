import React from "react";
import { connect } from "react-redux";
import News from "./News";
import { getNews, getTimeout } from './../../redux/news-reducer';
// import Preloader from './../common/Preloader';
import Preloader from './../common/Preloader';

class NewsContainer extends React.Component {

    componentDidMount() {
        this.props.getNews();
        setInterval(() => getTimeout(this.props.timer - 1), 1000);
       //setTimeout(() => getTimeout(this.props.timer - 1), 1000);
    }

    // onPageChanged = (pageNumber) => {
    //     this.props.getUsers(pageNumber, this.props.pageSize);
    // }

    render() {
        //debugger;
        //let timer = this.props.timer;
        //debugger;
        if (this.props.timer > 0) {
        //    timer = setTimeout(() => getTimeout(timer - 1), 1000);
        //setInterval(() => getTimeout(this.props.timer - 1), 1000);
          } else {
            getTimeout(59);
            //timer = 59;
            //handleUpdateComments().then(() => setSeconds(59));
          }


          if (this.props.timer > 0) {
            //    timer = setTimeout(() => getTimeout(timer - 1), 1000);
            //setTimeout(() => getTimeout(this.props.timer - 1), 1000);
              } else {
                getTimeout(59);
                //timer = 59;
                //handleUpdateComments().then(() => setSeconds(59));
              }




          
        return (<>
            {this.props.isFetching ? <Preloader /> : null}

            <div>{this.props.timer}</div>

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