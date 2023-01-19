import Container from 'react-bootstrap/Container';
import { Row } from 'react-bootstrap';

import Header from './components/Header';
import TableUsers from './components/TableUsers';

import './App.scss';

function App() {
  return (
    <div className='app-container'>
      <Header />
      <Container>
        <TableUsers />
      </Container>
    </div>
  );
}

export default App;
