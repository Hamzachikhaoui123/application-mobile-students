import axiosInstance from "../AxiosInstance";

export const getAllUser=()=>axiosInstance.get('/user/all')