import React, { useState, createContext } from 'react';
import { FaUserAlt } from "react-icons/fa";
import {Card} from 'react-bootstrap';
import AuthorInfo from './AuthorInfo';
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
                <h4>{props.title}</h4>
                <br/>
                <br/>
                <AuthorInfo/>
                {props.body}
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