import React, { FC, useState } from 'react'
import TextField from '@mui/material/TextField';

interface Props {
    handleInput : (value:string) => void
}
const SearchInput:FC<Props> = ({handleInput}) => {

    const [value, setValue] = useState('');
    const handleValue = (e) =>{
        setValue(e.target.value);
    }
    return (
        <TextField
            id="outlined-basic"
            value = {value}
            onChange = {handleValue}
            onKeyDown={(e) => {
                if(e.keyCode === 13){
                    handleInput(value);
                }
            }}
        />
    )
}

export default SearchInput