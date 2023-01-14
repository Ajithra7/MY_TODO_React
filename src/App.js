import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Form from './Components/Form';
import ViewAll from './Components/ViewAll';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/form' exact element ={<Form/> }/>
        <Route path='/viewall' exact element = {<ViewAll/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
