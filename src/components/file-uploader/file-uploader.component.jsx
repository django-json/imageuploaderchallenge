import React, { Fragment, useRef } from 'react';

import { Button } from './file-uploader.styles';

function FileUploader() {
    const hiddenFileInput = useRef(null);

    function handleClick(event) {
        hiddenFileInput.current.click();
    }

    function handleChange(event) {
        const file = event.target.files[0];
        console.log(file);
    }

    return (
        <Fragment>
            <Button onClick={handleClick}>Choose a file</Button>
            <input
                type="file"
                ref={hiddenFileInput}
                onChange={handleChange}
                style={{ display: 'none' }}
            />
        </Fragment>
    );
}

export default FileUploader;