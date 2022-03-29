import React, { useState } from 'react';
import useDebounce from '../useDebounce';
import './Search.css'

const Search = ({value , onChange}) => {
    const [displayvalue,  setdisplayvalue] = useState(value);
    const debouncedChange = useDebounce(onChange, 500);

    function handleChange(event){
        setdisplayvalue(event.target.value);
        debouncedChange(event.target.value);
    }
    return (
        <input type="search" value={displayvalue} onChange={handleChange}></input>
    )

}

export default Search;