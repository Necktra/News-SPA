import { Button } from "bootstrap";
import React from "react";
import { Card, Navbar } from "react-bootstrap";
import { transformContentDate } from "../../services/transformContentDate";
import classes from './CurrentNews.module.css';

let CurrentNews = (props) => {
    // debugger;
    return <div>

        <Card className={classes.mainWrapper}>
            <Card.Header className={classes.commentTitle}>

                    {props.news.score} points by <span className={classes.newsCreatorName}>{props.news.by}</span> {transformContentDate(props.news.time)}

            </Card.Header>
            <Card.Body className={classes.newsTitleWrap}>
                <Card.Title>{props.news.title}</Card.Title>
                <Card.Text>
                    <div className={classes.newsText} dangerouslySetInnerHTML={{ __html: props.news.text }} />

                    {/* <a ><button className={classes.btn}>Read in source</button></a> */}
                    {/* <a>Read in source</a> */}

                    <a href={props.news.url} className={classes.linkDecoration} target="_blank">Read in source</a>
<div/>
                    <Navbar.Brand href="/" className={classes.linkDecoration}>Back to main page</Navbar.Brand>

                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
        </Card>

    </div>
}



export default CurrentNews;