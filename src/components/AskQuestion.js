import React,{useState} from 'react';
import {Button,Modal,Form, Spinner} from 'react-bootstrap'
import AuthorInfo from './AuthorInfo';

export default function AskQuestion() {
    const [show, setShow] = useState(false);
    const [loading,setLoading]=useState(false);
    const [question,setQuestion]=useState({});
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <>
        <Button className="m-3" variant="primary" onClick={handleShow}>
            Ask a Question
        </Button>
  
        <Modal
            centered
            size="lg"
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Ask a Question</Modal.Title>
            </Modal.Header>
            <Modal.Body className="px-4">
                <AuthorInfo min/>
                <Form>
                    <Form.Group controlId="AskQuestionForm.ControlTextarea">
                        <Form.Label>Enter the question you want to ask:</Form.Label>
                        <Form.Control 
                            placeholder="Enter your Question here" as="textarea" rows="3"
                            onChange={(e)=>{
                                setQuestion({...question,title:e.target.value});
                            }} />
                        <Form.Text id="QuestionHelpBlock" muted>
                            Make sure the question you are going to ask is not already asked by someone else. We recommend searching before asking a new question.
                        </Form.Text>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button 
                    variant="primary" 
                    onClick={()=>{
                        setLoading(true);
                        setTimeout(()=>{
                            setLoading(false);
                            handleClose()
                        },500)
                    }}
                >
                    Ask
                    {loading?<Spinner animation="border" role="status" size="sm"/>:null}
                </Button>
            </Modal.Footer>
        </Modal>
      </>
    );
}