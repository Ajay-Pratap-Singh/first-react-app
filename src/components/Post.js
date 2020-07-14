import React from 'react';
import { FaUserAlt } from "react-icons/fa";
import {Card} from 'react-bootstrap';
import UserSummary from './UserSummary';

const Post = (props) => {
    return  (
        <Card className="mb-3">
            <Card.Body>
                <FaUserAlt className="mr-3 mb-3"/><br/>
                <h4>{props.title}</h4>
                {props.body}<br/>
            </Card.Body>
            <Card.Footer>
                <UserSummary userId={props.userId}/>
            </Card.Footer>
        </Card>
    )
}

export default Post;