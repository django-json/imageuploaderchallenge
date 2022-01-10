import styled from 'styled-components';

import { StyledInput } from '../input/input.styles';
import { StyledButton } from '../button/button.styles';

export const StyledInputGroup = styled.div`
    display: block;
    position: relative;

    ${StyledInput} {
        padding-right: 90px;
    }

    ${StyledButton} {
        position: absolute;
        top: 2px;
        right: 2px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 80px;
        height: 31px;
        font-size: 8px;
    }
`;
