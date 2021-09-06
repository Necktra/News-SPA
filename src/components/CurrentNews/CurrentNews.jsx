import { Button } from "bootstrap";
import React from "react";
import { Card } from "react-bootstrap";


let CurrentNews = (props) => {
    //debugger;
    return <div>Текущая новость


<Card>
  <Card.Header>{props.news.score} points by {props.news.by} time: {props.news.time}</Card.Header>
  <Card.Body>
    <Card.Title>{props.news.title}</Card.Title>
    <Card.Text>
    {props.news.text}
    </Card.Text>
    {/* <Button variant="primary">Go somewhere</Button> */}
  </Card.Body>
</Card>

        {/* {props.news.map(news => {
            //    debugger;
            return (<div key={news.id}>
                <Card className="text-center">
                    <Card.Body>
                        <Card.Title>{news.title}</Card.Title>
                    </Card.Body>
                    <Card.Footer className="text-muted">{news.score} points by {news.by} time: {news.time}</Card.Footer>
                </Card>




            </div>)
        })} */}


    </div>
}



export default CurrentNews;