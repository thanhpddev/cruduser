import { Alert } from "react-bootstrap";
import { useContext } from "react";
import { UserContext } from "../context/userContext";
import TableUsers from "../components/TableUsers";

const PrivateRoute = ({children}) => {

    const {user} = useContext(UserContext);

    if(user && !user.auth){
        return (
            <>
                <Alert variant="danger" className="mt-3">
                    <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                    <p>You don't have permission to access this route.</p>
                </Alert>
            </>
        )
    }

    return (
        <>
            {children}
        </>
    )
}

export default PrivateRoute;