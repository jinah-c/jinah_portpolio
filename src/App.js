/* eslint-disable */
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainPage from './Components/MainPage/MainPage';
import Navbar from './Components/Navbar/Navbar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Navbar />

        <Routes>
          <Route path="/" element={<MainPage/>}  />
          <Route path="MainPage" element={<MainPage/>}  />
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;