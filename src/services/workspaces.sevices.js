import instance from "~/interceptors/axios";

export const getAllMemberWorkspace = async (userId) => {
    return await instance.get(`/workspace/${userId}/user`);

};