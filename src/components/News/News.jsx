import { Button } from "bootstrap";
import React from "react";
import { Card } from "react-bootstrap";
import { Link, NavLink } from 'react-router-dom';
import { transformContentDate } from "../../services/transformContentDate";


let News = (props) => {
    //debugger;
    return <div>

        {props.news.map(news => {
                //debugger;
            return news&&(<div key={news.id}>
                <NavLink to={"/news/" + news.id}>
                    {/* <NavLink to={{pathname: `/news/${news.id}`, state: {title: `news.title`}}}> */}
                    {/* <NavLink to={{pathname: `/news/${news.id}`, aboutProps: {title: `news.title`}}}> */}
                    <Card className="text-center">
                        <Card.Body>
                            <Card.Title>{news.title}</Card.Title>
                        </Card.Body>
                        <Card.Footer className="text-muted">{news.score} points by {news.by} time: {transformContentDate(news.time)}</Card.Footer>
                    </Card>
                </NavLink>
            </div>)
        })}


    </div>
}



export default News;