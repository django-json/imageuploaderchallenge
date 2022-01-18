import React from 'react';

import {
    FooterContainer,
    FooterWrapper,
    FooterLink,
    FooterAuthorLink
} from './footer.styles';

function Footer() {
    return (
        <FooterContainer>
            <FooterWrapper>
                <span>created by </span>
                <FooterAuthorLink
                    href="https://github.com/django-json"
                    target="_blank"
                    rel="noreferrer"
                >
                    django-json
                </FooterAuthorLink>{' '}
                -{' '}
                <FooterLink
                    href="https://devchallenges.io"
                    target="_blank"
                    rel="noreferrer"
                >
                    devChallenges.io
                </FooterLink>
            </FooterWrapper>
        </FooterContainer>
    );
}

export default Footer;
