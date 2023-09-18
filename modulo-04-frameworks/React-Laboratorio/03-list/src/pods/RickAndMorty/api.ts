import axios from "axios";
const baseUrl = 'https://rickandmortyapi.com/api/character';

export const getCharacters = async () => {
    try {
        const { data } = await axios.get(baseUrl)
        const { results } = data;
        return results;
    } catch (error) {
        console.log(error)

    }
}

export const getCharacterByName = async (name:string) => {
    try {
        const { data } = await axios.get(`${baseUrl}/?name=${name}`)
        const { results } = data;
        return results;
    } catch (error) {
        console.log(error)

    }
}