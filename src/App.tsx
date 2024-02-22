
import {Route, Routes, BrowserRouter } from 'react-router-dom';
import { HomePage } from './pages/Home/HomePage';
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
