import { Fragment } from 'react';
import {Button,Modal} from 'react-bootstrap';
import { toast } from 'react-toastify';
import { deleteUser } from '../services/UserService';



const ModalConfirm = (props)=>{

    const {show, handleClose, dataUserDelete, handleDeleteUserFromModal} = props;

    const confirmDelete = async ()=>{
        let res = await deleteUser(dataUserDelete.id);
        if(res && +res.statusCode === 204){
            handleDeleteUserFromModal(dataUserDelete)
            handleClose();
            toast.success('Delete user successfully!')
        }else{
            toast.error('error delete user')
        }
    }
    

    return (
       
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} >
                <Modal.Header closeButton>
                    <Modal.Title>Delete user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="body-add-new">
                        This action can't be undone!
                        Do want to deleter this user?<br/><b>{ `email = ${dataUserDelete.email}` ? dataUserDelete.email : Fragment}</b>

                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                    Close
                    </Button>
                    <Button variant="primary" onClick={()=>confirmDelete()}>
                    Confirm
                    </Button>
                </Modal.Footer>
            </Modal>

            
    )
}

export default ModalConfirm;