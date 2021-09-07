import { Button } from "bootstrap";
import React from "react";
import { Card } from "react-bootstrap";
import { Link, NavLink } from 'react-router-dom';
import CommentsContainer from "./CommentsContainer";
import SingleCommentsContainer from "./SingleCommentsContainer";
import classes from './SingleComments.module.css';

let Comments = (props) => {



    // {props.openNestedComments.map( el => {
    //     //debugger;
    //     return <Comments comments={el.nestComment} key={el.nestComment.id} 
    //                 //getComments={this.props.getComments}
    //                 getNestedComments={props.getNestedComments}
    //                 openNestedComments={props.openNestedComments.filter(elFilt => {
    //                     return elFilt.parentId === el.nestComment.id})}
    //                 //return elFilt.parentId === props.comments.id})}
    //                 /> } 

    // // <Card className="text-center">
    // //         <Card.Body>
    // //             <Card.Title>by {el.nestComment} time: {props.comments.time}</Card.Title>
    // //         </Card.Body>
    // //         <Card.Footer className="text-muted">{props.comments.text}</Card.Footer>

    // //         {<button onClick={() => {
    // //             props.getNestedComments(props.comments.id);
    // //         }}>Show more</button>}
    // //     </Card>
    //     ) }





    // {
    //     if (props.openNestedComments.length > 0) {
    //         debugger;
    //     }
    // }

    //debugger;
    // debugger;
    return <div>
        <Card className="text-center">
            <Card.Body>
                <Card.Title>by {props.comments.by} time: {props.comments.time}</Card.Title>
            </Card.Body>
            <Card.Footer className="text-muted">{props.comments.text}</Card.Footer>


            {/* {
                props.comments.kids && <button idBtn={props.comments.id} onClick={() => {
                    props.getNestedComments(props.comments.id);
                }}>Show more</button>
            } */}


            {/* <button disabled={props.openNestedComments.some(id=>id===props.comments.id)} idBtn={props.comments.id} onClick={() => { */}
            {
                props.comments.kids && 
                <button disabled={props.openNestedComments.some(id => { return (id.parentId === props.comments.id) })} 
                idBtn={props.comments.id} onClick={() => {
                    props.getNestedComments(props.comments.id);
                }}>Show more</button>

            }

            {props.openNestedComments.map(el => {
                return (
                    <div className={classes.wrap}>
                        <SingleCommentsContainer comment={el.nestComment} comId={el.nestComment.id} />
                    </div>

                    //         <><Comments comments={el.nestComment} key={el.nestComment.id} 
                    //                     getNestedComments={props.getNestedComments}
                    //                     openNestedComments={props.openNestedComments.filter(elFilt => {
                    //                         return elFilt.parentId === el.nestComment.id})}
                    //                     /> 
                    // {<button onClick={() => {
                    //                 //props.unfollow(u.id);
                    //                 // props.getComments(props.comments.id);
                    //                 props.getNestedComments(el.nestComment.id);
                    //             }}>Show more</button>}
                    //                     </>
                )
            }

                // <Card className="text-center">
                //         <Card.Body>
                //             <Card.Title>by {el.nestComment} time: {props.comments.time}</Card.Title>
                //         </Card.Body>
                //         <Card.Footer className="text-muted">{props.comments.text}</Card.Footer>

                //         {<button onClick={() => {
                //             props.getNestedComments(props.comments.id);
                //         }}>Show more</button>}
                //     </Card>
            )}



            {/* {props.openNestedComments.map( el => {
        debugger;
        return (

        <SingleComments comments={el.nestComment} 
        // key={el.nestComment.id} 
                    getNestedComments={props.getNestedComments}
        //             openNestedComments={props.openNestedComments.filter(elFilt => {
        //                 return elFilt.parentId === el.nestComment.id})}
                    /> 
                    )} 
        )
} */}





        </Card>



        {/* {props.comments.kids && (props.comments.kids.map(comment => {
                return <CommentsContainer />
            }))} */}


    </div>
}



export default Comments;