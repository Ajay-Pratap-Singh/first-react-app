import React,{useState,useEffect} from 'react';
import Entity from './Entity';
import {FaComment} from 'react-icons/fa';
import {Button,Card,ListGroup,InputGroup,Form,FormControl,Col,Row, Container} from 'react-bootstrap';
import request from '../utils/requests';
import { useAuth } from '../hooks/useAuth';

function CommentIcon(props){
    return (
        <InputGroup className="mr-1" size="sm" as={Col}>
            <InputGroup.Prepend>
                <Button 
                    title="Comment"
                    className="pt-0" id="basic-addon1"
                    variant="secondary"
                    onClick={props.onClick}
                >
                    <FaComment size="1em"/>
                </Button>
            </InputGroup.Prepend>
            <FormControl
                title="Comments"
                readOnly
                disabled
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
                value={props.count}
            />
        </InputGroup>
    );
}

function CommentInput(props){
    const auth=useAuth();
    const [comment,setComment]=useState("");
    const comments=props.comments;
    const setComments=props.setComments;
    const postComment=(e)=>{
        e.preventDefault();
        setTimeout(()=>{
            if(comment!=='')
            setComments([{body:comment,author:auth.user},...comments])
            setComment('');
        },50)
        e.target.reset();
    }
    return (
        <Form onSubmit={postComment} className="mt-3 w-100" inline>
            <Form.Label htmlFor="inlineFormInputName2" srOnly>
                Comment
            </Form.Label>
            <Form.Control
                onChange={(e)=>{setComment(e.target.value)}}
                style={{width:"calc( 98% - 75px )"}}
                className="mr-2 mb-2"
                size="sm"
                placeholder="Enter comment"
            />
            <Button size="sm" type="submit" className="mb-2" style={{maxWiddth:"70px"}}>
                Comment
            </Button>
        </Form>
    );
}

function CommentSection(props) {
    const comments =props.comments;
    const setComments =props.setComments;

    useEffect(()=>{
        (async ()=>{
            if(comments.length<2){
                setComments([...comments,...(await request.get('https://jsonplaceholder.typicode.com/comments?_limit=4')).data]);
            }
        })()    
    },[comments,setComments])

    if(!props.commentCount)
        return null;

    return (
        <Card.Footer style={{fontSize:"0.9rem"}} className="p-0 pl-3">
            <Container>
                <Row>
                    <ListGroup id="comment-sec" variant="flush" className="border-left">
                        {comments.map((obj,key)=>
                            <ListGroup.Item key={key} className="p-0 border-0">
                                <Entity
                                    bg="light" 
                                    className="w-100 border-bottom-0 border-left-0 border-right-0 rounded-0"
                                    type="comment" 
                                    body={obj.body}
                                    author={obj.author}
                                />
                            </ListGroup.Item>)
                        }
                    </ListGroup>
                </Row>
            </Container>
        </Card.Footer>
    );
}

export {CommentIcon, CommentInput, CommentSection};