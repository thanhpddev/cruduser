import { useState } from "react";
import { toast } from "react-toastify";
import { loginAPI } from "../services/UserService";

function Login() {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [isShowPassword,setIsShowPassword] = useState(false);

    const handleLogin = async () => {
        if(!email || !password){
            toast.error('Email/password is required')
            return;
        }
        let res = await loginAPI('eve.holt@reqres.in', password)
        console.log(res)
        if(res && res.token){
            localStorage.setItem('token', res.token)
        }
    }

    return ( 
        <>
            <div className="login-container col-12 col-sm-4">
                <div className="title">Log in</div>
                <div className="text">Email or username</div>

                <div className="input-wrap">
                    <input type="text" placeholder="eve.holt@reqres.in" value={email} 
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
                className={email && password ? 'active' : ''}
                disabled={email && password ? false : true}
                onClick={()=>handleLogin()}
                >
                    Login
                </button>
                <div className="back">
                <i className="fa-solid fa-chevron-left"></i> Go back
                </div>
            </div>
        </>
     );
}

export default Login;