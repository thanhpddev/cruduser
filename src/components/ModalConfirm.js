import {Button,Modal, Form} from 'react-bootstrap';



const ModalConfirm = (props)=>{

    const {show, handleClose, dataUserDelete} = props;
    console.log(dataUserDelete)
    const confirmDelete = ()=>{

    }
    

    return (
       
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} >
                <Modal.Header closeButton>
                    <Modal.Title>Delete user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="body-add-new">
                        This action can't be undone!
                        Do want to deleter this user?<br/><b> email = {dataUserDelete.email}?</b>

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