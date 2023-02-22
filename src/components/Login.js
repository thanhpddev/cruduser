import { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

import { handleLoginRedux } from '../redux/actions/userAction';

function Login() {
    
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [isShowButton, setIsShowButton] = useState(false);
    const [isActive, setIsActive] = useState('active');
    
    const isLoading = useSelector(state=>state.user.isLoading);
    const account = useSelector(state=>state.user.account);
    console.log('isLoading', isLoading)


    const handleLogin = async () => {
        setIsShowButton(!isShowButton)
        setIsActive('')
        
        if(!email || !password){
            toast.error('Email/password is required')
            return;
        }

        dispatch(handleLoginRedux(email,password));

        setIsShowButton(false)
        setIsActive('active')
    }

    const handleGoBack = () => {
        navigate("/");
    }

    const handlePressEnter = (event)=>{
        if(event.key === 'Enter'){
            handleLogin();
        }
    }

    useEffect(()=>{
        if(account && account.auth === true){
            navigate("/");
        }
    },[account])

    return ( 
        <>
            <div className="login-container col-12 col-sm-4">
                <div className="title">Log in</div>
                <div className="text">Email or username (eve.holt@reqres.in)</div>

                <div className="input-wrap">
                    <input type="text" placeholder="Email or username..." value={email} 
                    onChange={event=>setEmail(event.target.value)}
                    />
                </div>
                <div className="input-wrap">
                    <input type={isShowPassword === true ? "text" : "password"} placeholder="Password..." value={password}
                    onChange={event=>setPassword(event.target.value)}
                    onKeyDown = {(event)=>handlePressEnter(event)}
                    />
                    {password && <i className={isShowPassword === true ? "fa-sharp fa-solid fa-eye" : "fa-solid fa-eye-slash" } onClick={()=>setIsShowPassword(!isShowPassword)}></i>}
                </div>

                <button 
                className={`submit ${email && password ? isActive : ''}`}
                disabled={isShowButton || !email || !password ? true : false}
                onClick={()=>handleLogin()}
                >
                    {isLoading && <i className="fa-solid fa-sync fa-spin mr-1"></i>} 
                    &nbsp; Login
                </button>
                <div className="back">
                    <i className="fa-solid fa-angles-left"></i>
                    <span onClick={()=>handleGoBack()}>&nbsp; Go back</span>
                </div>
            </div>
        </>
     );
}

export default Login;