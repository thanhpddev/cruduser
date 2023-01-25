import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginAPI } from "../services/UserService";

function Login() {

    const navigate = useNavigate()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [isShowButton, setIsShowButton] = useState(false);
    const [isActive, setIsActive] = useState('active');
    const [loadingAPI, setLoadingAPI] = useState(false);

    useEffect(()=>{
        let token = localStorage.getItem('token')
        if(token){
            navigate("/")
        }

    },[])

    const handleLogin = async () => {
        setIsShowButton(!isShowButton)
        setIsActive('')
        
        if(!email || !password){
            toast.error('Email/password is required')
            return;
        }
        setLoadingAPI(true)
        let res = await loginAPI(email, password)
        
        if(res && res.token){
            localStorage.setItem('token', res.token)
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
                <i className="fa-solid fa-chevron-left"></i> Go back
                </div>
            </div>
        </>
     );
}

export default Login;