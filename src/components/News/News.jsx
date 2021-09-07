import { Button } from "bootstrap";
import React from "react";
import { Card } from "react-bootstrap";
import { Link, NavLink } from 'react-router-dom';
import { transformContentDate } from "../../services/transformContentDate";
import classes from './News.module.css';
import CurrentNews from './../CurrentNews/CurrentNews';

let News = (props) => {
    //debugger;
    return <div>

        {props.news.map(news => {
            //debugger;
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
               



                    {/* <Card className="text-center">
                        <Card.Body>
                            <Card.Title>{news.title}</Card.Title>
                        </Card.Body>
                        <Card.Footer className="text-muted">{news.score} points by {news.by} time: {transformContentDate(news.time)}</Card.Footer>
                    </Card> */}



            </div>)
        })}


    </div>
}



export default News;