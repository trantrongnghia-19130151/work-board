import instance from "~/interceptors/axios";

export const getAllMemberWorkspace = async (userId) => {
    return await instance.get(`/workspace/${userId}/user`);

};
export const createColumn = async (body) => {
    return await instance.post(`/column`,body);

};
export const getWorkspaceById = async (userId) => {
    return await instance.get(`/workspace/${userId}`);

};
