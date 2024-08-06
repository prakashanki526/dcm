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

// export async function applyForJob(formData) {
//     const reqUrl = `http://localhost:8080/a`;
//     const result = await axios.post(reqUrl,formData);
//     return result.data;
// }