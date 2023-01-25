import { useState } from "react";

function Login() {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [isShowPassword,setIsShowPassword] = useState(false);


    return ( 
        <>
            <div className="login-container col-12 col-sm-4">
                <div className="title">Log in</div>
                <div className="text">Email or username</div>

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
                className={email && password ? 'active' : ''}
                disabled={email && password ? false : true}
                >
                    Login
                </button>
                <div className="back">
                <i class="fa-solid fa-chevron-left"></i> Go back
                </div>
            </div>
        </>
     );
}

export default Login;