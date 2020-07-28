import React,{useState} from 'react';
import Entity from './Entity';
import {FaComment,FaAngleDown,FaAngleUp} from 'react-icons/fa';
import {Button,Card,ListGroup,InputGroup,Form,FormControl,Col,Row,Collapse, Container} from 'react-bootstrap';
import axios from 'axios';

function CommentIcon(props){
    return (
        <InputGroup className="mr-1" size="sm" as={Col}>
            <InputGroup.Prepend>
                <Button 
                    title="Comment"
                    className="pt-0" id="basic-addon1"
                    variant="secondary"
                    onClick={()=>{props.setOpenCommentInput(!props.openCommentInput)}}
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
    const [comment,setComment]=useState("");
    const comments=props.comments;
    const setComments=props.setComments;
    const postComment=(e)=>{
        e.preventDefault();
        e.target.reset();
        props.setOpenCommentInput(false);
        setTimeout(()=>{
            if(comment!=='')
            setComments([{body:comment},...comments])
        },50)
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
    const [open, setOpen] = useState(false);
    const comments =props.comments;
    const setComments =props.setComments;

    if(!props.commentCount)
        return null;

    const showComments = async ()=>{
        setOpen(!open)
        if(comments.length<2){
            console.log('Fetching Comments for',props.parentId);
            setComments([...comments,...(await axios.get('https://jsonplaceholder.typicode.com/comments?_limit=2')).data]);
        }
    }

    return (
        <Card.Footer style={{fontSize:"0.9rem"}} className="p-0 pl-3">
            <Container>
                <Row>
                    <Col>
                        <hr/>
                    </Col>
                    <Button size="sm" className="mx-auto my-0" variant="link"
                        onClick={showComments}
                        /*onClick={() => setOpen(!open)}*/
                        aria-controls="comment-sec"
                        aria-expanded={open} 
                    >
                        {props.parentType==='comment'?`View ${props.commentCount} replies `:'View comments '}
                        {open?<FaAngleUp size="1em"/>:<FaAngleDown size="1em"/>}
                    </Button>
                    <Col>
                        <hr/>
                    </Col>
                </Row>
                <Row>
                    <Collapse in={open}>
                        <ListGroup id="comment-sec" variant="flush" className="border-left">
                            {comments.map((obj,key)=>
                                <ListGroup.Item key={key} className="p-0 border-0">
                                    <Entity
                                        bg="light" 
                                        className="w-100 border-bottom-0 border-left-0 border-right-0 rounded-0"
                                        type="comment" 
                                        body={obj.body}
                                    />
                                </ListGroup.Item>)
                            }
                        </ListGroup>
                    </Collapse>
                </Row>
            </Container>
        </Card.Footer>
    );
}

export {CommentIcon, CommentInput, CommentSection};