import React from 'react';
import classNames from 'classnames';

import { StyledInput } from './input.styles';

function Input({ type, value, className, onChange }) {
    const classes = classNames(className);
    return (
        <StyledInput
            type={type}
            value={value}
            className={classes}
            onChange={onChange}
        />
    );
}

export default Input;
