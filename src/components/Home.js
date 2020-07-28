import React from 'react';
import Entity from './Entity';
import CategoriesPanel from './Categories';
import AskQuestion from './AskQuestion';
import {Container,Col,Row} from 'react-bootstrap';

export default function Home(props) {
    // const [posts,setPosts]=useState([]);
    // useEffect(()=>{
    //     (async ()=>{
    //       console.log('Fetching Posts');
    //       setPosts((await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')).data);
    //     })()
    // },[]);
    return (
        <Container fluid className="mx-4 mt-2 w-auto">
          <Row>
            <Col xs={"auto"} className="d-none d-lg-block p-0">
              <CategoriesPanel/>
            </Col>
            <Col className="p-0 px-sm-2 px-md-3">
              <Row>
                <AskQuestion/>
              </Row>
              <Row>
                {props.posts.map((obj)=><Entity key={obj.id} id={obj.id} type="question" title={obj.title} body={obj.body} userId={obj.userId}/>)}
              </Row>
            </Col>
            <Col xs={"auto"} className="d-none d-xl-block p-0">
              <CategoriesPanel/>
            </Col>
          </Row>
        </Container>
    );
  }