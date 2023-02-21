import { Route, Routes, Link } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import NotFound from './NotFound';

import TableUsers from '../components/TableUsers';
import Home from '../components/Home';
import Login from '../components/Login';

const AppRoutes = ()=>{
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/users" element={
                    <PrivateRoute >
                        <TableUsers />
                    </PrivateRoute>
                } />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    )
}

export default AppRoutes;