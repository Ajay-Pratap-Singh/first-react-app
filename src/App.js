import React,{useState, useEffect} from 'react';
import { IconContext } from "react-icons";
import Navbar from './components/Navbar';
import Home from './components/Home';
import axios from 'axios';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import QuestionPage from './components/QuestionPage';

function App() {
  const [posts,setPosts]=useState([]);
  useEffect(()=>{
      (async ()=>{
        console.log('Fetching Posts');
        setPosts((await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')).data);
      })()
  },[]);
  return (
    <Router>
    <IconContext.Provider value={{ size:"1.5em"}}>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route path="/" exact>
            <Home posts={posts}/>
          </Route>
          <Route path="/question/:id" exact>
            <QuestionPage/>
          </Route>
        </Switch>
      </div>
    </IconContext.Provider>
    </Router>
  );
}

export default App;