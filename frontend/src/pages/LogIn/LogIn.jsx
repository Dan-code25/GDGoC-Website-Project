import './LogIn.css';
import AnimationBackground from '../../components/AnimationBackground/AnimationBackground';
import React, { useState } from 'react';
import backend from '../../api/axios';
import { useUser } from '../../context/UserContext';

function LogIn({ onClose, isClosing }) {
    const [googler_id, setGooglerId] = useState('');
    const [password, setPassword] = useState('');
    const [exiting, setExiting] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const {setFirstName, setLastName, setUsername, setGdgID, setGdg_pts} = useUser()

    const handleExit = () => {
        setExiting(true); 
    };

    const login = async(e) => {
        e.preventDefault()

        if (isLoading) return;

        console.log('login clicked')
        setIsLoading(true);

        try{
            const res = await backend.post('auth/sign-in',{
                    googler_id,
                    password
                }
            )
            console.log('Response:', res);
            if (res.status === 200){
                localStorage.setItem('googler_id',googler_id)
                setUsername(res.data.username)
                setFirstName(res.data.first_name)
                setLastName(res.data.last_name)
                setGdgID(googler_id)
                setGdg_pts(res.data.gdg_pts)
                window.alert(res.data.response)
                
                // Close the login modal after successful login
                handleExit();
            }

        }catch (error) {
            console.error('Login error:', error);
            const msg = error?.response?.data?.response || 'Login failed. Please try again.';
            window.alert(msg);
            setIsLoading(false);
        } finally {
            setGooglerId('')
            setPassword('')          
        }

        
    };


    
    return (
        <>
            <div  
                className={`login-modal-wrapper ${exiting || isClosing ? "login-exit" : ""}`}
                onAnimationEnd={() => {
                    if (exiting) onClose(); 
                }}
                onClick={(e) => e.stopPropagation()}
            >
                <div className='login-container' onClick={(e) => e.stopPropagation()}                                   >
                    <AnimationBackground />
                    
                    <button className='ph--triangle-fill' onClick={handleExit}></button>
                    
                    {/* Profile Actions - Same uses in profile exitBtn*/}
                    <div className="profile-actions">
                        <span className="exitBtn" onClick={handleExit} />
                    </div>

                    <div className="LogIn">
                        <h1>Log in</h1>
                        <p className="greet">Hello, welcome back to your account</p>
                        
                        <div className="IdContainer">
                            <span className="IdIcon"></span>
                            <input type="text" 
                            placeholder="GDGOC ID" 
                            className="idInput"
                            value={googler_id}
                            onChange={(e)=>{setGooglerId(e.target.value)}}/>
                        </div>
                        
                        <div className="passwordContainer">
                            <span className="PasswordIcon"></span>
                            <input type="password" 
                            placeholder="Password" 
                            className="passwordInput"
                            value ={password}
                            onChange={(e)=>{setPassword(e.target.value)}}/>
                        </div>
                        
                        <button className="logInButton" onClick={login} disabled={isLoading}>
                            {isLoading ? 'Logging in...' : 'Log in'}
                        </button>
                    </div> 
                </div>
            </div>
       </>
    );
}

export default LogIn;