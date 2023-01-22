import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import ReactPaginate from 'react-paginate';
import _ from 'lodash';

import { fetchAllUsers } from '../services/UserService';
import ModalAddNew from './ModalAddNew';
import ModalEditUser from './ModalEditUser';
import ModalConfirm from './ModalConfirm';

import './TableUsers.scss';

const TableUsers = (props) =>{
    const [listUsers, setListUsers] = useState([])
    const [totalUsers,setTotalUsers] = useState(0)
    const [totalPages,setTotalPages] = useState(0)
    
    const [dataUserEdit, setDataUserEdit] = useState({});
    const [dataUserDelete, setDataUserDelete] = useState({});

    const [isShowModalAddNew, setIsShowModalAddNew] = useState(false);
    const [isShowModalEdit, setIsShowModalEdit] = useState(false);
    const [isShowModalDelete, setIsShowModalDelete] = useState(false);

    const [sortBy, setSortBy] = useState('asc');
    const [sortField, setSortField] = useState('id');

    //handle asc/desc
    const handleSort = (sortBy,sortField ) => {
        setSortBy(sortBy);
        setSortField(sortField);

        let cloneListUsers = _.cloneDeep(listUsers);
        cloneListUsers = _.orderBy(cloneListUsers, [sortField], [sortBy]);

        console.log(cloneListUsers)
        setListUsers(cloneListUsers)
    }

    const handleClose = () => {
        setIsShowModalAddNew(false)
        setIsShowModalEdit(false)
        setIsShowModalDelete(false)
    }

    const handleUpdateTable = (user) =>{
        setListUsers([user, ...listUsers]);
    }

    //btn confirm edit click
    const handleEditUsersFromModal = (user) =>{
        let cloneListUsers = _.cloneDeep(listUsers);
        let index = listUsers.findIndex(item=> item.id === user.id);
        cloneListUsers[index].first_name= user.first_name;
        setListUsers(listUsers)
    }

    useEffect(()=>{
        getUsers(1);
        
    },[])

    const getUsers = async (page)=>{
        let res = await fetchAllUsers(page);
        
        if(res && res.data){
            setListUsers(res.data)
            setTotalUsers(res.total)
            setTotalPages(res.total_pages)
        }
    }

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        getUsers(+event.selected+1)
    };

    const handleEditUser = (user) =>{
        setDataUserEdit(user)
        setIsShowModalEdit(true)
    };

    //handle delete
    const handeDeleteUser = (user) =>{
        setIsShowModalDelete(true)
        setDataUserDelete(user)
    }

    //click btn delete
    const handleDeleteUserFromModal = (user)=>{
        let cloneListUsers = _.cloneDeep(listUsers);
        cloneListUsers = cloneListUsers.filter(item => item.id !== user.id)
        setListUsers(cloneListUsers)
    }
    return (
    <>
         <div className="my-3 add-new">
            <span><b>List Users:</b></span>
            <button className="btn btn-success" onClick={()=>setIsShowModalAddNew(true)}>Add new user</button>
          </div>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th className='sort-header'>
                        <div>
                            <span>ID</span> 
                            <span>
                                <i className="fa-solid fa-arrow-down-long" onClick={()=>handleSort('desc','id')}></i>
                                <i className="fa-solid fa-arrow-up-long" onClick={()=>handleSort('asc','id')}></i>
                            </span>    
                        </div>
                    </th>
                    <th>Email</th>
                    <th className='sort-header'>
                        <div>
                            <span>First Name</span>
                            <span>
                                <i className="fa-solid fa-arrow-down-long" onClick={()=>handleSort('desc','first_name')}></i>
                                <i className="fa-solid fa-arrow-up-long" onClick={()=>handleSort('asc','first_name')}></i>
                            </span>
                        </div>    
                    </th>
                    <th>Last Name</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                { listUsers && listUsers.length >0 &&
                    listUsers.map((item, index)=>{
                        return <tr key={`users-${index}`}>
                            <td>{item.id}</td>
                            <td>{item.email}</td>
                            <td>{item.first_name}</td>
                            <td>{item.last_name}</td>
                            <td>
                                <button className='btn btn-warning' onClick={()=>handleEditUser(item)}>Edit</button>
                                <button className='btn btn-danger mx-3' onClick={()=>handeDeleteUser(item)}>Delete</button>
                            </td>
                        </tr>
                    })
                }
                
                
            </tbody>
        </Table>
        <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={totalPages}
            previousLabel="< previous"


            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"

        />

        <ModalAddNew show = {isShowModalAddNew} handleClose={handleClose} handleUpdateTable = {handleUpdateTable} />

        <ModalEditUser show = {isShowModalEdit} handleClose={handleClose} dataUserEdit={dataUserEdit} handleUpdateTable = {handleUpdateTable} handleEditUsersFromModal={handleEditUsersFromModal}/>

        <ModalConfirm show = {isShowModalDelete} handleClose={handleClose} dataUserDelete={dataUserDelete} handleDeleteUserFromModal={handleDeleteUserFromModal} />
    </>
)
}

export default TableUsers;