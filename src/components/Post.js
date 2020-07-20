import React, { useState, createContext } from 'react';
import { FaUserAlt } from "react-icons/fa";
import {Card} from 'react-bootstrap';
import UserSummary from './UserSummary';
import {CommentSection} from './Comments';
import ViewsVoteShareReport from './ViewsVoteShareReport';

const VoteContext=createContext({
    voted:null,
    setVoted:()=>{}
});

const Post = (props) => {
    const [voted,setVoted]=useState(null);//use props
    const contextValue={voted,setVoted};
    return  (
        <Card className="mb-3">
            <Card.Body>
                <FaUserAlt className="mr-3 mb-3"/>
                <UserSummary userId={props.userId}/>
                <br/>
                <h4>{props.title}</h4>
                {props.body}<br/>
                <VoteContext.Provider value={contextValue}>
                    <ViewsVoteShareReport/>
                </VoteContext.Provider>
            </Card.Body>
            <Card.Footer>
                <CommentSection/>
            </Card.Footer>
        </Card>
    )
}
export {VoteContext};
export default Post;