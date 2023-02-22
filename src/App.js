import Container from 'react-bootstrap/Container';
import { ToastContainer } from 'react-toastify';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from './components/Header';
import AppRoutes from './routes/AppRoutes';
import { handleRefresh } from './redux/actions/userAction';

import 'react-toastify/dist/ReactToastify.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.scss';


function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    if(localStorage.getItem('token')){
      // loginContext(localStorage.getItem('email'),localStorage.getItem('token'))
      dispatch(handleRefresh());
    }
  },[])

  return (
    <>
      <div className='app-container'>
        <Header />
        <Container>
          <AppRoutes />
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
