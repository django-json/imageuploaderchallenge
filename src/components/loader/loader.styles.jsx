import styled from 'styled-components';

export const LoaderContainer = styled.div`
    position: relative;
    width: 100%;
    height: 6px;
    background: var(--white-3);
    border-radius: 8px;
`;

export const LoaderContent = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    height: 6px;
    background: var(--blue-1);
    border-radius: 8px;
    animation: right 1s linear infinite;
    -webkit-animation: right 2s linear infinite;
    @keyframes right {
        to {
            -webkit-transform: translateX(240px);
        }
    }
    @-webkit-keyframes right {
        to {
            -webkit-transform: translate(240px);
        }
    }
`;

export const LoaderLabel = styled.div`
    font-size: 18px;
    color: var(--black);
    text-align: left;
    margin-bottom: 20px;
`;
