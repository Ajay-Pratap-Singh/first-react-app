import React,{useState} from 'react';
import {Button,Modal,Form, Spinner} from 'react-bootstrap'
import AuthorInfo from './AuthorInfo';
import Editor from './Editor';

export default function WriteAnswer(props) {
    const [show, setShow] = useState(false);
    const [loading,setLoading]=useState(false);
    const [answer,setAnswer]=useState({});
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <>
        <Button className="m-3" variant="primary" onClick={handleShow}>
            Write Answer
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
                <Modal.Title>Write Answer for: {props.questionTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="px-4">
                <AuthorInfo/>
                <Form>
                    <Form.Group controlId="AnswerForm.ControlTextarea">
                        <Form.Label>Enter your answer</Form.Label>
                        <Editor
                            placeholder="Enter your Question here" rows="3"
                            setAnswer={setAnswer}
                            answer={answer} />
                        <Form.Text id="QuestionHelpBlock" muted>
                            Make your submission awesome
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
                            handleClose();
                            props.setAnswers([answer,...props.answers]);
                            setLoading(false);
                        },500)
                    }}
                >
                    Submit Answer 
                    {loading?<Spinner animation="border" role="status" size="sm"/>:null}
                </Button>
            </Modal.Footer>
        </Modal>
      </>
    );
}