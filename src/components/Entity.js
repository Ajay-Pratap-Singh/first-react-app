import React, { useState, createContext } from 'react';
import {Card} from 'react-bootstrap';
import AuthorInfo from './AuthorInfo';
import {CommentSection,CommentInput} from './Comments';
import ActionBar from './ActionBar';
import EntityHeader from './EntityHeader';

const VoteContext=createContext({
    voted:null,
    setVoted:()=>{}
});

const Entity = (props) => {
    const [openCommentInput, setOpenCommentInput] = useState(false);
    const [comments, setComments] = useState([]);
    const [voted,setVoted]=useState(null);//use props false(dislike)  null(not-voted)  true(like)
    const voteValue={voted,setVoted};
    return  (
        <Card bg={props.bg} className={props.className||"mb-3"} style={{width:"100%"}}>
            <Card.Body className="p-2 p-sm-3">
                {props.type!=="comment"?<EntityHeader min type={props.type} eid={props.id} title={props.title}/>:null}
                <AuthorInfo min={props.type==='comment'}/>
                {props.body}
                <VoteContext.Provider value={voteValue}>
                    <ActionBar views={props.type!=='comment'} vote comment share={props.type!=='comment'} report setOpenCommentInput={setOpenCommentInput} OpenCommentInput={openCommentInput} />
                </VoteContext.Provider>
                {openCommentInput?<CommentInput setOpenCommentInput={setOpenCommentInput} comments={comments} 
                setComments={setComments}/>:null}
            </Card.Body>
            <CommentSection comments={comments} setComments={setComments} parentType={props.type} parentId={props.id} commentCount={3}/>
        </Card>
    )
}
export {VoteContext};
export default Entity;