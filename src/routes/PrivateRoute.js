import { Alert } from "react-bootstrap";
import { useSelector } from "react-redux";
import TableUsers from "../components/TableUsers";

const PrivateRoute = ({children}) => {
    const user = useSelector(state=>state.user.account);
    
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