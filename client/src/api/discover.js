import axios from 'axios';

export async function getOpenings() {
    const reqUrl = `http://localhost:8080/auth/get-jobs`;
    const result = await axios.get(reqUrl);
    return result.data;
}


export async function postQuery(query) {
    const reqUrl = `http://localhost:8080/auth/post-query`;
    const result = await axios.post(reqUrl,query);
    return result.data;
}

export async function applyForJob(formData) {
    const reqUrl = `http://localhost:8080/post-application`;
    const result = await axios.post(reqUrl,formData);
    return result.data;
}

export async function registerUser(userData) {
    const reqUrl = 'http://localhost:8080/api/auth/signup';
    const result = await axios.post(reqUrl,userData);
    return result.data;
}

export async function loginUser(userData) {
    const reqUrl = 'http://localhost:8080/api/auth/login';
    const result = await axios.post(reqUrl,userData);
    return result.data;
}

export async function getQueries() {
    const reqUrl = 'http://localhost:8080/auth/get-queries';
    const result = await axios.get(reqUrl);
    return result.data;
}

export async function getRoles() {
    const reqUrl = `http://localhost:8080/auth/get-jobs`;
    const result = await axios.get(reqUrl);
    return result.data;
}

export async function getApplicants(role) {
    const reqUrl = `http://localhost:8080/auth/get-applicants?role=${role}`;
    const result = await axios.get(reqUrl);
    return result.data;
}

export async function postJob(job) {
    const reqUrl = `http://localhost:8080/auth/post-job`;
    const result = await axios.post(reqUrl,job);
    return result.data;
}