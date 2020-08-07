import React, { useState, createContext, useRef } from 'react';
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
    const [openComments, setOpenComments] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const bodyContent = useRef(null);
    const [comments, setComments] = useState([]);
    const [voted,setVoted]=useState(null);//use props false(dislike)  null(not-voted)  true(like)
    const voteValue={voted,setVoted};
    return  (
        <Card bg={props.bg} className={props.className||"mb-3"} style={{width:"100%"}}>
            <Card.Body className="p-2 p-sm-3">
                {props.type!=="comment"?<EntityHeader min type={props.type} eid={props.id} title={props.title}/>:null}
                <AuthorInfo min={props.type==='comment'}/>
                {expanded?null:(props.firstImg)}
                <div ref={bodyContent} style={{maxHeight:expanded?"none":"11ch",overflow:"hidden"}}>
                    {props.body}
                    {props.body}
                    {props.body}
                    {props.body}
                    {props.body}
                    {props.body}
                    {props.body}
                    {props.body}
                </div>
                <p style={{textAlign:"right", color:"blue",cursor:"pointer"}} onClick={(e)=>{
                    setExpanded(true);
                    e.target.style.visibility="hidden"
                    console.log("Show more clicked",bodyContent)
                    }}
                >
                    Show more
                </p>
                <VoteContext.Provider value={voteValue}>
                    <ActionBar views={props.type!=='comment'} vote comment share={props.type!=='comment'} report setOpenComments={setOpenComments} openComments={openComments} />
                </VoteContext.Provider>
                {openComments?<CommentInput setOpenCommentInput={setOpenComments} comments={comments} 
                setComments={setComments}/>:null}
            </Card.Body>
            {openComments?<CommentSection comments={comments} setComments={setComments} parentType={props.type} parentId={props.id} commentCount={3}/>:null}
        </Card>
    )
}
export {VoteContext};
export default Entity;