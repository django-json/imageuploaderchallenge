import styled from 'styled-components';

export const FooterContainer = styled.footer`
    font-family: var(--footer-font);
    font-size: 14px;
    display: flex;
    justify-content: center;
    text-align: center;
    color: var(--grey-2);
    width: 100%;
`;

export const FooterWrapper = styled.div`
    border-top: 20px;
`;

export const FooterLink = styled.a`
    text-decoration: none;
    color: inherit;

    &:hover {
        text-decoration: underline;
    }
`;

export const FooterAuthorLink = styled(FooterLink)`
    text-decoration: underline;
    font-weight: 700;
`;
