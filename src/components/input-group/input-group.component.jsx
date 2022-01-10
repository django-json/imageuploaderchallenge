import React from 'react';

import { StyledInputGroup } from './input-group.styles';

function InputGroup({ children }) {
    return (
        <StyledInputGroup className="input-group">{children}</StyledInputGroup>
    );
}

export default InputGroup;
