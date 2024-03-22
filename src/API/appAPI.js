import { commonAPI } from "./commonAPI";
import BASE_URL from "./baseUrl";

//getting Items

export const itemView = async () =>{
    return await commonAPI("GET", `${BASE_URL}/api/items`,"","")
}

//registration
export const register = async (reqBody) =>{
    return await commonAPI("POST",`${BASE_URL}/api/register`,reqBody,"")
}

//login
export const login = async (reqBody) =>{
    return await commonAPI("POST",`${BASE_URL}/api/login`,reqBody,"")
}

//delete
export const deleet = async(reqHeader) =>{
    return await commonAPI("DELETE",`${BASE_URL}/api/delete-user`,"",reqHeader)
}

//update
export const update = async(reqBody,reqHeader) =>{
    return await commonAPI("PUT",`${BASE_URL}/api/update-user`,reqBody,reqHeader) 
}