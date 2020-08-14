import React, {useState, useEffect} from 'react';
import SuggestionsPanel from './Suggestions';
import AuthorInfo from './AuthorInfo';
import Entity from './Entity';
import {Container,Col,Row} from 'react-bootstrap';
import request from '../utils/requests';
import ReactHtmlParser from 'react-html-parser';
import WriteAnswer from './WriteAnswer';

export default function QuestionPage(props) {
    const [answers,setAnswers]=useState([]);
    useEffect(()=>{
        (async ()=>{
          console.log('Fetching Answers');
          setAnswers((await request.get('https://jsonplaceholder.typicode.com/posts?_limit=5')).data);
        })()
    },[]);
    return (
        <Container fluid className="mx-4 mt-2 w-auto">
          <Row>
            <Col className="p-0 px-sm-2 px-md-3">
                <AuthorInfo min/>
                <h3>Here comes our question</h3>
                <p className="text-muted">Some stuff about question<br/>Some more stuff about question</p>
                <br/>
                <WriteAnswer answers={answers} setAnswers={setAnswers}/>
                <br/>
                {answers.map((obj,key)=><Entity key={obj.id} id={obj.id} type="answer" firstImg={ReactHtmlParser(obj.firstImg?obj.firstImg.outerHTML:null)} body={ReactHtmlParser(obj.body)} author={obj.author}/>)}
            </Col>
            <Col xs={4} className="d-none d-md-block p-0">
              <SuggestionsPanel/>
            </Col>
          </Row>
        </Container>
    );
}