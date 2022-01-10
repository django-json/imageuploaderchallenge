import React, { Fragment } from 'react';

import { LoaderContainer, LoaderContent, LoaderLabel } from './loader.styles';

function Loader() {
    return (
        <Fragment>
            <LoaderLabel>Uploading...</LoaderLabel>
            <LoaderContainer>
                <LoaderContent />
            </LoaderContainer>
        </Fragment>
    );
}

export default Loader;
