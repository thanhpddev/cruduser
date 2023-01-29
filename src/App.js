import Container from 'react-bootstrap/Container';
import { ToastContainer } from 'react-toastify';
import { Route, Routes, Link } from 'react-router-dom';
import { useContext } from 'react';

import Header from './components/Header';
import TableUsers from './components/TableUsers';
import Home from './components/Home';
import Login from './components/Login';
import { UserContext } from './context/userContext';

import 'react-toastify/dist/ReactToastify.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.scss';
import { useEffect } from 'react';


function App() {

  const { user,loginContext } = useContext(UserContext);

  useEffect(()=>{
    if(localStorage.getItem('token')){
      loginContext(localStorage.getItem('email'),localStorage.getItem('token'))
    }
  },[])

  return (
    <>
      <div className='app-container'>
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<TableUsers />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Container>
        
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
