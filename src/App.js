import React,{ useState } from 'react'
import './App.css';
import Create from './components/Create';
import Read from './components/Read'
import Update from './components/Update'
import {BrowserRouter as Router, Route,Link} from 'react-router-dom'
import { Button } from 'semantic-ui-react';

const App = ()  => {

  const [disable,setDisable] = useState(false)
  console.log(disable)

  // useEffect(() => {
  //   setDisable(true)
  // }, [])
  return (
    <Router>
      <div className="main">
        <h2 className="main-header">React CURD App</h2>
          {disable === false ? <Link to='./create'><Button  onClick={() => setDisable(true)}>Create</Button></Link> :
          <br></br>
          }
        <div>
          <Route exact path='/create' component = {Create} />
        </div>
        <div style={{marginTop:20}}>
          <Route exact path='/read' component = {Read} />
        </div>
        <div>
          <Route exact path='/update' component = {Update} />
        </div>
      </div>
    </Router>

  );
}

export default App;
