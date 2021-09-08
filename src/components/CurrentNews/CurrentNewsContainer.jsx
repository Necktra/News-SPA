import React from "react";
import { connect } from "react-redux";
import CurrentNews from "./CurrentNews";
import { getCurrentNews } from '../../redux/currentNews-reducer';

class CurrentNewsContainer extends React.Component {

    componentDidMount() {
        this.props.getCurrentNews(this.props.props.match.params.newsId);
    }

    render() {
        return <CurrentNews news={this.props.currentNews} />
    }
}

let mapStateToProps = (state) => {
    return {
        currentNews: state.currentNewsPage.currentNews,
        isFetching: state.currentNewsPage.isFetching,
    }
}

export default connect(mapStateToProps,
    {
        getCurrentNews,
    }
)(CurrentNewsContainer);