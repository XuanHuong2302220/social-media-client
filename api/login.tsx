import axiosCustom from "@/utils/axiosCustom";
import { useState } from "react";
import { toast } from "react-toastify";

const useLogin = ()=> {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const handleLogin = (password: string) => {
        if(password.length < 6){
            setError('Password must be at least 6 characters');
        }
        else{
            setError(null);
        }
    }
    const login = async(account: string, password: string) => {
        handleLogin(password);
        if(error) return;
        try {
            setLoading(true);
            const response = await axiosCustom.post('/login', {
                username: account,
                email: account,
                password: password
            })
            console.log(response.data)   
        } catch (error) {
            toast.error(error instanceof Error && error.message, {
            position: 'bottom-center'
            });
            throw error;
        }
        finally{
            setLoading(false);
        }
    }

    return { login, loading, error}
}

export default useLogin;