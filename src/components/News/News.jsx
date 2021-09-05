import { Button } from "bootstrap";
import React from "react";
import { Card } from "react-bootstrap";


let News = (props) => {
    //debugger;
    return <div>Это новости


        {props.news.map(news => {
            //debugger;
            return (<div key={news.data.id}>

                <Card className="text-center">
                    {/* <Card.Header>Featured</Card.Header> */}
                    <Card.Body>
                        <Card.Title>{news.data.title}</Card.Title>
                        {/* <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text> */}
                        {/* <Button variant="outline-success">Success</Button>{' '} */}
                    </Card.Body>
                    <Card.Footer className="text-muted">{news.data.date}</Card.Footer>
                </Card>

                {/* <div>{news.data.title}</div><div>{news.data.author}</div> */}


            </div>)
        })}


    </div>
}



export default News;