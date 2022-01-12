import React from 'react';

import {
    SuccessIcon,
    SuccessLabel,
    ImageOverviewContainer,
    ImageOverview
} from './upload-overview.styles';

import Button from '../button/button.component';
import Input from '../input/input.component';
import InputGroup from '../input-group/input-group.component';

function UploadOverview() {
    function copyToClipboard() {
        /* Copy the text inside the text field */
        navigator.clipboard.writeText(
            'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg'
        );
    }

    return (
        <div className="upload-overview">
            <SuccessIcon className="material-icons">check_circle</SuccessIcon>
            <SuccessLabel>Uploaded Successfully!</SuccessLabel>
            <ImageOverviewContainer>
                <ImageOverview
                    src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
                    alt="Uploaded File Overview"
                />
            </ImageOverviewContainer>
            <InputGroup>
                <Input
                    type="text"
                    value="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
                    onChange={() => {}}
                />
                <Button type="button" onClick={copyToClipboard}>
                    Copy Link
                </Button>
            </InputGroup>
        </div>
    );
}

export default UploadOverview;
