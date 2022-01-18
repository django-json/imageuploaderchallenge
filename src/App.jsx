import styled from 'styled-components';

import { ImageUploaderWrapper } from './components/imageuploader/imageuploader.styles';

export const ImageUploaderContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    min-height: 100vh;

    ${ImageUploaderWrapper} {
        flex: 0 1 auto;
    }

    @media (max-width: 500px) {
        ${ImageUploaderWrapper} {
            margin: 10px;
        }
    }
`;
