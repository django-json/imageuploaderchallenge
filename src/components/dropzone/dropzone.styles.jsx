import styled from 'styled-components';

const getColor = (props) => {
    if (props.isDragAccept) {
        return '#00e676';
    }
    if (props.isDragReject) {
        return '#ff1744';
    }
    if (props.isDragActive) {
        return '#2196f3';
    }
    return '#97bef4';
};

export const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    border-width: 2px;
    border-radius: 12px;
    border-color: ${(props) => getColor(props)};
    border-style: dashed;
    background-color: var(--white-2);
    color: var(--grey-3);
    outline: none;
    transition: border 0.24s ease-in-out;
`;

export const Label = styled.p`
    font-size: 12px;
    color: ${(props) => {
        return props.errors ? '#ff1744' : 'var(--grey-3)';
    }};
    margin-bottom: 0;
`;

export const Logo = styled.img`
    margin-bottom: 20px;
`;
