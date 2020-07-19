import React from 'react';
import {FaRegEye} from 'react-icons/fa';
import {Button,InputGroup,FormControl,Col} from 'react-bootstrap';

export default function Views(props){
    return (
        <InputGroup as={Col}>
            <InputGroup.Prepend>
                <Button 
                    title="Views"
                    size="sm" className="pt-0" id="basic-addon1" 
                    disabled
                    variant="secondary"
                >
                    <FaRegEye size="1em"/>
                </Button>
            </InputGroup.Prepend>
            <FormControl
                title="Views"
                readonly
                disabled
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
                value={props.count}
                size="sm"
            />
        </InputGroup>
    );
}