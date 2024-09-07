import { useState } from "react";
import useAuth from "./useAuthContext";

export const useSignup = () => {
    const [error, setError] = useState(null);
    const { dispatch } = useAuth();

    const signup=async(name, email, bloodGroup, password, role)=>{
        setError(null);

        console.log("AP=>",name, email, bloodGroup, password, role)

        const response=await fetch("http://localhost:4000/api/user/signup",{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify({name, email, bloodGroup, password, role})
        })

        const json=await response.json();

        if(!response.ok){
            return (json.error);
            setError(json.error);
        }
        if(response.ok){
            localStorage.setItem('user',JSON.stringify(json));

            dispatch({type:'LOGIN',payload:json})
            if(json?.user?.role === 'school-owner') {
                navigate('/dashboard')
            }
            else if(json?.user?.role === 'teacher') {
                navigate('/teacherDashboard/profile')
            }

        }
    }

    return { signup, error };
};
