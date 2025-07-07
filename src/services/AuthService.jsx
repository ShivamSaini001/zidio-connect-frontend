import { toast } from 'react-toastify';
import axios from "axios"

const api = axios.create({
    baseURL: 'http://localhost:9090/api/v1/auth',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
})

// Send OTP by email
export const sendOTP = async (email) => {
    const toastId = toast.loading('Sending OTP...');
    return await api.post(`/email/register-otp?email=${email}`)
        .then((response) => {
            toast.dismiss(toastId);
            toast.success('OTP sent successfully...');
            return response.data;
        })
        .catch((error) => {
            toast.dismiss(toastId);
            toast.error(error.response.data.message);
        });
}

// Register user
export const registerUser = async (userData) => {
    const toastId = toast.loading('Processing registration...');
    // Convert userData to JSON string
    return await api.post('/register', userData).then(() => {
        toast.dismiss(toastId);
        toast.success('Registration successful!');
        return true;
    }).catch((error) => {
        toast.dismiss(toastId);
        toast.error(error.response.data.message);
    })
};

// Login usaer
export const loginUser = async (userData) => {
    const toastId = toast.loading('Processing login...');

    return await api.post("/login", userData)
        .then((response) => {
            toast.dismiss(toastId);
            toast.success('Login successful!');
            return response.data;
        })
        .catch((error) => {
            toast.dismiss(toastId);
            toast.error(error.response.data.message);
            return null;
        })
}