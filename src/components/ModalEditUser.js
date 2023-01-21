import { useEffect, useState } from 'react';
import {Button,Modal, Form} from 'react-bootstrap';
import { toast } from 'react-toastify';

import { putUpdataUser } from '../services/UserService';


const ModalEditUser = (props)=>{

    const {show,handleClose,dataUserEdit, handleEditUsersFromModal} = props;

    const [name, setName] = useState("");
    const [job, setJob] = useState("");
    
    const handleEditUser = async ()=>{
        let res = await putUpdataUser(name, job);
        if(res && res.updatedAt){
            handleEditUsersFromModal({
                first_name: name,
                id: dataUserEdit.id
            })
            handleClose();
            toast.success('Update user successfully')
        }
    }

    useEffect(()=>{
        if(show){
            setName(dataUserEdit.first_name)
        }
    }, [dataUserEdit])

    return (
       
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} >
                <Modal.Header closeButton>
                    <Modal.Title>Edit user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="body-add-new">
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Name" value={name} onChange={event=>setName(event.target.value)} />
                        </Form.Group>
    
                        <Form.Group className="mb-3">
                            <Form.Label>Job</Form.Label>
                            <Form.Control type="text" placeholder="Job" value={job} onChange={event=>setJob(event.target.value)} />
                        </Form.Group>
                    
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                    Close
                    </Button>
                    <Button variant="primary" onClick={()=>handleEditUser()} >
                    Confirm
                    </Button>
                </Modal.Footer>
            </Modal>

            
    )
}

export default ModalEditUser;