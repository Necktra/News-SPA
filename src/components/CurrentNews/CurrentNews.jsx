import { Button } from "bootstrap";
import React from "react";
import { Card } from "react-bootstrap";


let News = (props) => {
    //debugger;
    return <div>Текущая новость


        {props.news.map(news => {
            //    debugger;
            return (<div key={news.id}>
                <Card className="text-center">
                    {/* <Card.Header>Featured</Card.Header> */}
                    <Card.Body>
                        <Card.Title>{news.title}</Card.Title>
                        {/* <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text> */}
                        {/* <Button variant="outline-success">Success</Button>{' '} */}
                        {/* <div>{news.score} points by {news.by}</div> */}
                    </Card.Body>
                    <Card.Footer className="text-muted">{news.score} points by {news.by} time: {news.time}</Card.Footer>
                </Card>

                {/* <div>{news.data.title}</div><div>{news.data.author}</div> */}


            </div>)
        })}


    </div>
}



export default News;