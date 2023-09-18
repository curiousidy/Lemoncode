import axios from "axios";

const baseUrl = 'https://api.github.com/orgs/';

export const getMembers = async (organizationName:string) => {
    try {
        const { data } = await axios.get(`${baseUrl}${organizationName}/members`)
        return data;

    } catch (error) {
        console.log(error)

    }
}