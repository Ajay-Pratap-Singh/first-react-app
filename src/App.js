import React,{useState, useEffect} from 'react';
import { IconContext } from "react-icons";
import Entity from './components/Entity';
import Navbar from './components/Navbar';
import CategoriesPanel from './components/Categories';
import axios from 'axios';
import {Container,Col,Row} from 'react-bootstrap';


function App() {
  const [posts,setPosts]=useState([]);
  useEffect(()=>{
      (async ()=>{
        console.log('Fetching Posts');
        setPosts((await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')).data);
      })()
  },[]);
  return (
    <IconContext.Provider value={{ size:"1.5em"}}>
      <div className="App">
        <Navbar/>
        <Container fluid className="mx-4 mt-2 w-auto">
          <Row>
            <Col xs={"auto"} className="d-none d-lg-block p-0">
              <CategoriesPanel/>
            </Col>
            <Col>
              {posts.map((obj)=><Entity key={obj.id} id={obj.id} type="answer" title={obj.title} body={obj.body} userId={obj.userId}/>)}
            </Col>
            <Col xs={"auto"} className="d-none d-xl-block p-0">
              <CategoriesPanel/>
            </Col>
          </Row>
        </Container>
        
      </div>
    </IconContext.Provider>
  );
}

export default App;