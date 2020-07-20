import React,{useState, useContext} from 'react';
import {FaThumbsDown,FaThumbsUp} from 'react-icons/fa';
import {Button,Col,InputGroup,FormControl,Spinner} from 'react-bootstrap';
import {VoteContext} from './Post';

export default function Vote(props){
    const {voted,setVoted} = useContext(VoteContext);
    const [downvoteCount,setDownvoteCount] = useState(props.downvotes);
    const [upvoteCount,setUpvoteCount] = useState(props.upvotes);
    const [clicked,setClicked] = useState(null);
    const voteHandler = (upvote) => {
        setClicked(upvote);
        if(voted===null){
            setTimeout(()=>{
                setVoted(upvote);
                upvote?setUpvoteCount(upvoteCount+1):setDownvoteCount(downvoteCount+1);
                setClicked(null);
            },500)
        }else if(voted===upvote){
            setTimeout(()=>{
                setVoted(null);
                upvote?setUpvoteCount(upvoteCount-1):setDownvoteCount(downvoteCount-1);
                setClicked(null);
            },500)
        }else{
            setTimeout(()=>{
                setVoted(upvote);
                if(upvote){
                    setUpvoteCount(upvoteCount+1);
                    setDownvoteCount(downvoteCount-1);
                }else{
                    setUpvoteCount(upvoteCount-1);
                    setDownvoteCount(downvoteCount+1);
                }
                setClicked(null);
            },500)
        }
    }
    return (
        <>
            <InputGroup as={Col}>
                <InputGroup.Prepend>
                    <Button
                        title="Like" 
                        size="sm" className="pt-0" id="basic-addon1" 
                        disabled={clicked!==null} 
                        variant={voted===true ? "primary" : "secondary" } 
                        onClick={()=>{voteHandler(true)}}
                    >
                        {clicked===true?<Spinner animation="border" role="status" size="sm"/>:<FaThumbsUp size="1em"/>}
                    </Button>
                </InputGroup.Prepend>
                <FormControl
                    title="Likes"
                    readOnly
                    disabled
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    value={upvoteCount}
                    size="sm"
                />
            </InputGroup>
            <InputGroup as={Col}>
                <InputGroup.Prepend>
                    <Button 
                        title="Dislike"
                        size="sm" className="pt-0" id="basic-addon1" 
                        disabled={clicked!==null} 
                        variant={voted===false ? "danger" : "secondary" } 
                        onClick={()=>{voteHandler(false)}}
                    >
                        {clicked===false?<Spinner animation="border" role="status" size="sm"/>:<FaThumbsDown size="1em"/>}
                    </Button>
                </InputGroup.Prepend>
                <FormControl
                    title="Dislikes"
                    readOnly
                    disabled
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    value={downvoteCount}
                    size="sm"
                />
            </InputGroup>
        </>
    );
}