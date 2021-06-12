import React from "react";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {initialmoviesdata} from "../initialmovies";





function SearchBar () {

    return(
        <div className="search-bar">
    <Autocomplete
        id="search-box-title"
        options={initialmoviesdata}
        getOptionLabel={(option) => option.moviename}
        style={{width: 300}}
        renderInput={(params) => <TextField {...params} label="Search for Title" variant="outlined"/>}
    />
        </div>
    );
}

export default SearchBar;