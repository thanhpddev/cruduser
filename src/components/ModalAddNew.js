import { useState } from 'react';
import {Button,Modal, Form} from 'react-bootstrap';
import { toast } from 'react-toastify';

import { postCreateUser } from '../services/UserService';


const ModalAddNew = (props)=>{

    const {show,handleClose, handleUpdateTable} = props;

    const [name, setName] = useState("");
    const [job, setJob] = useState("");

    const handleSaveUser = async ()=>{
        let res = await postCreateUser(name,job);
        if(res && res.id){
            handleClose();
            setName('');
            setJob('');
            toast.success('A user is created successfully');
            handleUpdateTable({first_name: name, id: res.id});
        }
        else{
            toast.error('An error...')
        }
    }

    return (
       
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} >
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
                    <Button variant="primary" onClick={()=>handleSaveUser()} >
                    Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

            
    )
}

export default ModalAddNew;