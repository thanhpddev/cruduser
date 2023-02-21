import { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginAPI } from "../services/UserService";

import { UserContext } from '../context/userContext';

function Login() {

    const navigate = useNavigate()

    const { loginContext } = useContext(UserContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [isShowButton, setIsShowButton] = useState(false);
    const [isActive, setIsActive] = useState('active');
    const [loadingAPI, setLoadingAPI] = useState(false);

    // useEffect(()=>{
    //     let token = localStorage.getItem('token')
    //     if(token){
    //         navigate("/")
    //     }

    // },[])

    const handleLogin = async () => {
        setIsShowButton(!isShowButton)
        setIsActive('')
        
        if(!email || !password){
            toast.error('Email/password is required')
            return;
        }
        setLoadingAPI(true)
        let res = await loginAPI(email.trim(), password)
        
        if(res && res.token){
            loginContext(email, res.token);
            navigate("/")
        }else{
            //error
            if(res && res.status === 400){
                toast.error(res.data.error)
            }
        }
        setLoadingAPI(false)
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
                    {loadingAPI && <i className="fa-solid fa-sync fa-spin mr-1"></i>} 
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