import { Button } from "bootstrap";
import React from "react";
import { Card } from "react-bootstrap";
import { transformContentDate } from "../../services/transformContentDate";


let CurrentNews = (props) => {
    //debugger;
    return <div>

        <Card>
            <Card.Header>{props.news.score} points by {props.news.by} time: {transformContentDate(props.news.time)}</Card.Header>
            <Card.Body>
                <Card.Title>{props.news.title}</Card.Title>
                <Card.Text>
                    <div dangerouslySetInnerHTML={{ __html: props.news.text }} />
                    {/* {props.news.text} */}
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
        </Card>

    </div>
}



export default CurrentNews;