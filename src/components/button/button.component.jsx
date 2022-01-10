import React from 'react';
import classNames from 'classnames';

import { StyledButton } from './button.styles';

function Button({ text, type, className, onClick, children, ...props }) {
    const classes = classNames(className);
    return (
        <StyledButton onClick={onClick} type={type} className={classes}>
            {text ? text : children}
        </StyledButton>
    );
}

export default Button;
