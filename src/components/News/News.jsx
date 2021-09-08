import React from "react";
import { Card } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import { transformContentDate } from "../../services/transformContentDate";
import classes from './News.module.css';

let News = (props) => {

    return <div>

        {props.news.map(news => {
            return news && (<div key={news.id}>
                <Card className={classes.mainWrapper}>
                    <NavLink to={"/news/" + news.id} className={classes.linkDecoration}>
                        <Card.Header className={classes.commentTitle}>
                            {news.score} points by {news.by} {transformContentDate(news.time)}
                        </Card.Header>
                        <Card.Body className={classes.newsTitleWrap}>
                            <Card.Title>{news.title}</Card.Title>
                        </Card.Body>

                    </NavLink>
                </Card>
            </div>)
        })}
    </div>
}

export default News;