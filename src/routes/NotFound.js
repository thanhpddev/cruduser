import { Alert } from "react-bootstrap";

const NotFound = ()=>{
    return (
        <>
            <Alert variant="danger" className="mt-3">
                <Alert.Heading>Not Found</Alert.Heading>
            </Alert>
        </>
    )
}

export default NotFound;