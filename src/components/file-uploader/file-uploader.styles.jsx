import styled from 'styled-components';

export const Button = styled.button`
    font-size: 12px;
    background: var(--blue-1);
    border: none;
    border-radius: 8px;
    color: var(--white-1);
    padding: 10px 15px;
    cursor: pointer;
    &:hover {
        background: #386eb6;
        transition: 0.5s ease;
    }
`;
