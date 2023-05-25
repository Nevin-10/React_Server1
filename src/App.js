
import './App.css';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import Student from './components/Student';

import Add from './components/Add';

function App() {

 


  return (
    <><NavBar /><div className="App">

      <Routes>
        <Route path='/' element={<Student />}></Route>
        <Route path='/Add' element={<Add />}></Route>
      </Routes>


    </div></>
  );
}

export default App;
