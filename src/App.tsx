
import {Route, Routes, BrowserRouter } from 'react-router-dom';
import { HomePage } from './pages/Home/HomePage';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={HomePage} ></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
