import React, { FC, useState } from 'react'
import TextField from '@mui/material/TextField';
import { useDebouncedCallback } from 'use-debounce';


interface Props {
    handleInput : (value:string) => void
}
const SearchInput:FC<Props> = ({handleInput}) => {

    const [value, setValue] = useState('');
    const debounced = useDebouncedCallback(
        () => handleInput(value),
        1000
    );
    const handleValue = (e) =>{
        setValue(e.target.value);
    }
    return (
        <TextField
            id="outlined-basic"
            value = {value}
            onChange = {handleValue}
            onKeyDown={debounced}
        />
    )
}

export default SearchInput