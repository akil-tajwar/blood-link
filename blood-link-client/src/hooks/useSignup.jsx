import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthContext from "./useAuthContext";

export const useSignup = () => {
    const navigate = useNavigate();
    const [error,setError]=useState(null);
    const {dispatch}=useAuthContext();

    const signup=async(name, email, phone, bloodGroup, password, role)=>{
        setError(null);

        console.log("AP=>",name, email, phone, bloodGroup, password, role)

        const response=await fetch("http://localhost:4000/api/user/signup",{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify({name, email, phone, bloodGroup, password, role})
        })

        const json=await response.json();

        if(!response.ok){
            return (json.error);
            setError(json.error);
        }
        if(response.ok){
            localStorage.setItem('user',JSON.stringify(json));

            dispatch({type:'LOGIN',payload:json})
            if(json?.user?.role === 'user') {
                navigate('/dashboard')
            }

        }
    }
    return { signup, error };
};
