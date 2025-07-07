import { toast } from 'react-toastify';
import axios from "axios"

const user = JSON.parse(localStorage.getItem('user'));

const api = axios.create({
    baseURL: 'http://localhost:9090/api/v1',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${user?.jwtToken}`,
    }
});

export const authenticateUser = () => {
    if (user === null) {
        window.location.href = '/sign-in';
        return;
    }
}

export const getCurrentUserEmail = () => {
    authenticateUser();
    return user?.username;
}

// Get user profile by email
export const getTeacherProfileByEmail = async (email) => {
    authenticateUser();

    return await api.get(`/teacher/profile/get/email/${email}`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.error('Error fetching user profile: ', error);
        });
}


// Update teacher profile
export const updateTeacherProfile = async (email, updatedTeacherProfile) => {
    authenticateUser();
    const toastId = toast.loading('Updating teacher profile...');
    return await api.put(`/teacher/profile/update/${email}`, updatedTeacherProfile)
        .then((response) => {
            toast.dismiss(toastId);
            toast.success('Teacher profile updated successfully!!');
            return response.data;
        })
        .catch((error) => {
            toast.dismiss(toastId);
            console.log(error);
            // toast.success('Teacher profile updated successfully!');

        })
}

// Update student profile

// Update recruiter profile

// Update admin profile