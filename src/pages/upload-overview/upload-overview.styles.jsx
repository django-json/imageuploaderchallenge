import styled from 'styled-components';

export const SuccessIcon = styled.i`
    &.material-icons {
        font-size: 35px;
        color: green;
    }
`;

export const SuccessLabel = styled.div`
    font-size: 18px;
    color: var(--black);
`;

export const ImageOverviewContainer = styled.div`
    display: inline-block;
    width: 100%;
    height: 250px;
`;

export const ImageOverview = styled.img`
    border-radius: 12px;
    width: 100%;
    background-size: cover;
    margin: 30px 0;
`;

export const ImageSourceBox = styled.input`
    background: var(--white-2);
    border-radius: 8px;
    border: 1px solid var(--grey-4);
`;
