
import './App.css';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import Student from './components/Student';

import Add from './components/Add';

function App(){

  //To pass an argument in Add for using it twice

 

  return (
    <><NavBar /><div className="App">

      <Routes>
        <Route path='/' element={<Student />}></Route>
        <Route path='/Add' element={<Add data={{sname:'',sgrade:'' }} method='post' />}></Route>
      </Routes>


    </div></>
  );
}

export default App;
