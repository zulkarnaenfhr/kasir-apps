import axios, { Axios } from "axios";

export const GetAdminData = (linkroot, path, username) => {
    const AdminData = new Promise((resolve, reject) => {
        axios.get(`${linkroot}/${path}/${username}`).then(
            (data) => {
                resolve(data);
            },
            (err) => {
                reject(err);
            }
        );
    });

    return AdminData;
};
