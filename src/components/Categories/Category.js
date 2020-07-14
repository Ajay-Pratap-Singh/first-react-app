import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Category = (props) => {
    const follow=()=>{
        console.log("Following",props.name);    
    }
    return(
        <InputGroup className="mb-3">
            <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">{props.name}</InputGroup.Text>
            </InputGroup.Prepend>
            <Button variant="secondary" onClick={follow}>Follow</Button>
        </InputGroup>
    )
}

export default Category;