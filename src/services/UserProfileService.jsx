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
    // if (user === null) {
    //     window.location.href = '/sign-in';
    //     return;
    // }
}

export const getCurrentUserEmail = () => {
    // authenticateUser();
    return user?.username;
}

// Get user profile by email
export const getTeacherProfileByEmail = async (email) => {
    // authenticateUser();

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
    // authenticateUser();
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

// Get Student profile by email
export const getStudentProfile = async () => {

    return await api.get(`/student/profile/get/email`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            toast.error('Error fetching user profile: ', error);
        });
}

// Update student profile
export const updateStudentProfile = async (profileData) => {

    const toastId = toast.loading('Updating...');
    return await api.put(`/student/profile/update`, profileData)
        .then((response) => {
            toast.dismiss(toastId);
            toast.success('Your profile updated successfully!!');
            return response.data;
        })
        .catch((error) => {
            toast.dismiss(toastId);
            toast.error(error)
        });
}

// Update recruiter profile

// Update admin profile

// Add Skills
export const addUserSkill = async (skill) => {

    const toastId = toast.loading('Processing...');
    return await api.post(`/all/user/skills/create`, skill)
        .then((response) => {
            toast.dismiss(toastId);
            toast.success('Skills added successfully!!');
            return response.data;
        })
        .catch((error) => {
            toast.error(error);
        })
}

// Remove Skills
export const removeUserSkill = async (skill) => {
    const toastId = toast.loading('Processing...');
    return await api.delete(`/all/user/skills/delete`, {
        data: skill
    })
        .then((response) => {
            toast.dismiss(toastId);
            toast.success('Skills deleted successfully!!');
            return response.data;
        })
        .catch((error) => {
            toast.error(error);
        })
}

// Remove Education
export const removeUserEducation = async (education) => {
    const toastId = toast.loading('Processing...');
    return await api.delete(`/all/user/educations/delete`, {
        data: education
    })
        .then((response) => {
            toast.dismiss(toastId);
            toast.success('Education deleted successfully!!');
            return response.data;
        })
        .catch((error) => {
            toast.error(error);
        })
}

// Add Education
export const addUserEducatoin = async (education) => {

    const toastId = toast.loading('Processing...');
    return await api.post(`/all/user/educations/create`, education)
        .then((response) => {
            toast.dismiss(toastId);
            toast.success('Education added successfully!!');
            return response.data;
        })
        .catch((error) => {
            toast.error(error);
        })
}

export const updateUserEducation = async (education) => {
    const toastId = toast.loading('Processing...');
    return await api.put(`/all/user/educations/update`, education)
        .then((response) => {
            toast.dismiss(toastId);
            toast.success('Education updated successfully!!');
            return response.data;
        })
        .catch((error) => {
            toast.error(error);
        })
}