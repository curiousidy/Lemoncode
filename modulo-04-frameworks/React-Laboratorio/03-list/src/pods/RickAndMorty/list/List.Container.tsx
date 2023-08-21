import axios from 'axios';
import React, { useEffect, useState } from 'react'
import RickAndMortyListComponent from './List.Component';
import { CharactersInterface } from './characters.model';
import SearchInput from '../../../common/SearchInput.rick';

const RickAndMortyListContainer = () => {
    const baseUrl = 'https://rickandmortyapi.com/api/character';
    const [characters, setCharacters] = useState<CharactersInterface[]>()
    const loadCharacters = async () => {
        try {
            const { data } = await axios.get(baseUrl)
            const { results } = data;
            setCharacters(results);
        } catch (error) {
            console.log(error)

        }
    }

    const findCharacterByName = async (name:string) => {
        try {
            const { data } = await axios.get(`${baseUrl}/?name=${name}`)
            const { results } = data;
            setCharacters(results);
        } catch (error) {
            console.log(error)

        }
    }
    useEffect(() => {
        loadCharacters();
    }, [])

    return characters &&
        <>
            <SearchInput handleInput={ findCharacterByName } />
            <RickAndMortyListComponent characters={ characters } />
        </>

}

export default RickAndMortyListContainer;