import styled from 'styled-components';

export const LoaderContainer = styled.div`
    position: relative;
    width: 100%;
    height: 6px;
    background: var(--white-3);
    border-radius: 8px;
    overflow-x: hidden;
`;

export const LoaderContent = styled.div`
    position: absolute;
    top: 0;
    left: -100px;
    width: 100px;
    height: 6px;
    background: var(--blue-1);
    border-radius: 8px;
    animation: right 1s linear infinite;
    -webkit-animation: right 1s linear infinite;
    @keyframes right {
        to {
            -webkit-transform: translateX(440px);
        }
    }
    @-webkit-keyframes right {
        to {
            -webkit-transform: translate(440px);
        }
    }

    @media (max-width: 375px) {
        @keyframes right {
            to {
                -webkit-transform: translateX(395px);
            }
        }
        @-webkit-keyframes right {
            to {
                -webkit-transform: translate(395px);
            }
        }
    }

    @media (max-width: 374px) {
        width: 70px;
        left: -70px;

        @keyframes right {
            to {
                -webkit-transform: translateX(310px);
            }
        }
        @-webkit-keyframes right {
            to {
                -webkit-transform: translate(310px);
            }
        }
    }
`;

export const LoaderLabel = styled.div`
    font-size: 18px;
    color: var(--black);
    text-align: left;
    margin-bottom: 20px;
`;
