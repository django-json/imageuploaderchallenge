import React from 'react';

import {
    SuccessIcon,
    SuccessLabel,
    ImageOverviewContainer,
    ImageOverview
} from './upload-overview.styles';

import Button from '../../components/button/button.component';
import Input from '../../components/input/input.component';
import InputGroup from '../../components/input-group/input-group.component';

function UploadOverviewPage(props) {
    function copyToClipboard() {
        /* Copy the text inside the text field */
        navigator.clipboard.writeText(props.result.data.image);
    }

    return (
        <div className="upload-overview">
            <SuccessIcon className="material-icons">check_circle</SuccessIcon>
            <SuccessLabel>Uploaded Successfully!</SuccessLabel>
            <ImageOverviewContainer>
                <ImageOverview
                    src={props.result.data.image}
                    alt="Uploaded File Overview"
                />
            </ImageOverviewContainer>
            <InputGroup>
                <Input
                    type="text"
                    value={props.result.data.image}
                    onChange={() => {}}
                />
                <Button type="button" onClick={copyToClipboard}>
                    Copy Link
                </Button>
            </InputGroup>
        </div>
    );
}

export default UploadOverviewPage;
