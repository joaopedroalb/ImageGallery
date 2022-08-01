import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login/Login';
import {UserProvider} from './context/UserContext'
import User from './components/User';
import ProtectedRoute from './components/Helper/ProtectedRoute';

function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
        <UserProvider>
          <Header/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='login/*' element={<Login/>}/>
            <Route path='account/*' element={
                                              <ProtectedRoute>
                                                <User/>
                                              </ProtectedRoute>
                                            }
            />
          </Routes>
          <Footer/>
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
