import './ChangePassword.css';
import AnimationBackground from '../AnimationBackground/AnimationBackground';
import React, { useState } from 'react';
import backend from '../../api/axios';


function ChangePassword({ onClose, isClosing }) {
    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [gdgocid, setGgdocid]= useState('')
    const [exiting, setExiting] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleExit = () => {
        setExiting(true); 
    }

    const validateForm = () => {
        return oldPassword.trim() !== '' && 
            (newPassword.trim() !== '' && 
                newPassword.length >= 8 && 
                /[A-Z]/.test(newPassword) && 
                /[0-9]/.test(newPassword) &&
                /[!@#$%^&*]/.test(newPassword)) && 
            gdgocid.trim() !== '';
    }

    const change_password = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            window.alert('Please fill in all fields correctly. New password must be at least 8 characters long and include at least one uppercase letter, one number, and one special character.');
            return;
        }

        if (isLoading) return;
        
        setIsLoading(true);

        try {
            const res = await backend.post('auth/change-password',{
                googler_id: gdgocid,
                old_password: oldPassword,
                new_password: newPassword}
            )
            alert(res.data.response);
            handleExit();
            
        } catch (error) {
            console.error('Change Password error:', error);
            const msg = error?.response?.data?.error || 'Change Password failed. Please try again.';
            window.alert(msg);
        }finally{
            setGgdocid('')
            setOldPassword('')
            setNewPassword('')
        }
    }
    return (
        <>
            <div 
                className={`ChangePassword-modal-wrapper ${exiting || isClosing ? "CP-exit" : ""}`}
                onAnimationEnd={() => {
                    if (exiting) onClose(); 
                }}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="OverlayChangePassword-container">
                    <AnimationBackground />
                    <div className="ChangePassword">
                        <h1>Change Password</h1>

                        <div className="IdContainer">
                            <span className="IdIcon"></span>
                            <input id='gdgID' type="text" placeholder="GDGOC ID" className="idInput"
                            value={gdgocid} onChange={(e)=>{setGgdocid(e.target.value)}}/> 
                            {/* I removed equired */}
                        </div>
                        
                        <div className="OldPasswordContainer">
                            <span className="PasswordIcon"></span>
                            <input id='oldPass' type="password" placeholder="Old Password" className="OldPasswordInput"
                            value={oldPassword} onChange={(e)=>{setOldPassword(e.target.value)}}required/>
                        </div>

                        <div className="NewPasswordContainer">
                            <span className="PasswordIcon"></span>
                            <input id='newPass' type="password" placeholder="New Password" className="NewPasswordInput"
                            value={newPassword} onChange={(e)=>{setNewPassword(e.target.value)}}required/>
                        </div>

                        <button className="ConfirmButton" onClick={change_password} disabled={isLoading}>Confirm</button>
                    </div>
                    
                </div>
            </div>
        </>
    );
}   

export default ChangePassword;