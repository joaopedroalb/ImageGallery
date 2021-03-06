import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login/Login';
import {UserProvider} from './context/UserContext'

function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
        <UserProvider>
          <Header/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login/*' element={<Login/>}/>
          </Routes>
          <Footer/>
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
