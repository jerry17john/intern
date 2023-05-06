
import './App.css';
import TestComponent from './component/TestComponent';
import Basics from './component/Basics';
import Form from './component/Form';
import { Route, Routes } from 'react-router-dom';
import ViewData from './component/ViewData';

function App() {
  return (
    <div className="App">
      <TestComponent/>

    <br/>
    <br/><br/>
    <Routes>
      <Route path ='/' element={<Basics/>}></Route>
      <Route path='/form' element={<Form/>}/>
      <Route path='/view' element={<ViewData/>}/>


    </Routes>
      {/* <Basics/>*/}
      {/*<Array/>*/}
    </div>
  );
}

export default App;
