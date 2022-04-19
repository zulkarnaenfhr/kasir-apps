import { GetAdminData } from "./AdminData/GetAdminData";

const RootPath = "http://localhost:1414";
const AdminData = "AdminData";

const getAdminData = (username) => GetAdminData(RootPath, AdminData, username);

export const API = {
    getAdminData,
};
