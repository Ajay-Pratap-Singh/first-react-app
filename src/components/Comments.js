import React,{useState} from 'react';
import {FaComment,FaAngleDown,FaAngleUp} from 'react-icons/fa';
import {Button,ListGroup,InputGroup,FormControl,Col,Row,Collapse} from 'react-bootstrap';

function CommentIcon(props){
    return (
        <InputGroup as={Col}>
            <InputGroup.Prepend>
                <Button 
                    title="Comment"
                    size="sm" className="pt-0" id="basic-addon1"
                    variant="secondary"
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
                size="sm"
            />
        </InputGroup>
    );
}
function CommentSection() {
    const [open, setOpen] = useState(false);

    return (
        <>
        <Row>
            <Col>
                <hr/>
            </Col>
            <Button className="mx-auto" variant="link"
                onClick={() => setOpen(!open)}
                aria-controls="comment-sec"
                aria-expanded={open} 
            >
                Comments
                {
                    open?
                    <FaAngleUp size="1em"/>:
                    <FaAngleDown size="1em"/>
                }
            </Button>
            <Col>
                <hr/>
            </Col>
        </Row>
        <Row>
            <Collapse in={open}>
                <ListGroup id="comment-sec" variant="flush" className="border-top">
                    {/*categories.map((obj)=><Category name={obj.name} following={true}/>)*/}
                </ListGroup>
            </Collapse>
        </Row>
        </>
    );
}
export {CommentIcon,CommentSection};