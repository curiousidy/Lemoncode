import React, { useEffect, useState } from 'react'
import RickAndMortyListComponent from './List.Component';
import { CharactersInterface } from './characters.model';

import { getCharacterByName, getCharacters } from '../api';
import SearchInput from '../components/SearchInput.rick';

const RickAndMortyListContainer = () => {
    
    const [characters, setCharacters] = useState<CharactersInterface[]>()
    const loadCharacters = async () =>  setCharacters(await getCharacters());

    const findCharacterByName = async (name:string) => setCharacters(await getCharacterByName(name));
     
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