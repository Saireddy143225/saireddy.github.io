import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from './Login';
import Welcome from './Welcome';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Login/>}/>
      <Route exact path="/Welcome" element={<Welcome/>}/>
      <Route exact path="/Login" element={<Login/>}/>
    </Routes>
    </BrowserRouter>
    </>
);

}

export default App;
