import { useEffect, useState } from 'react';
import {Button,Modal, Form} from 'react-bootstrap';
import { toast } from 'react-toastify';

import { postCreateUser } from '../services/UserService';


const ModalEditUser = (props)=>{

    const {show,handleClose,dataUserEdit} = props;

    const [name, setName] = useState("");
    const [job, setJob] = useState("");

    const handleEditUser = ()=>{

    }

    useEffect(()=>{
        if(show){
            setName(dataUserEdit.first_name)
        }
    }, [dataUserEdit])

    return (
       
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add new user</Modal.Title>
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