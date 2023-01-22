import Container from 'react-bootstrap/Container';
import { ToastContainer } from 'react-toastify';

import Header from './components/Header';
import TableUsers from './components/TableUsers';

import 'react-toastify/dist/ReactToastify.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.scss';

function App() {
  return (
    <>
      <div className='app-container'>
        <Header />
        <Container>
          
          <TableUsers />
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
