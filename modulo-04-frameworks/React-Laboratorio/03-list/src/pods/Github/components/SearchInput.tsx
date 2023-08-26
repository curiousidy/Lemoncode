import React, { FC, useState } from 'react'
import TextField from '@mui/material/TextField';

interface Props {
    handleOrganizationName : React.Dispatch<React.SetStateAction<string>>
}
const SearchInput:FC<Props> = ({handleOrganizationName}) => {

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
                    handleOrganizationName(value);
                }
            }}
        />
    )
}

export default SearchInput