import React, { Fragment, useRef } from 'react';

import Button from '../button/button.component';

function FileUploader({ setErrors, setUploading }) {
    const hiddenFileInput = useRef(null);

    function handleClick(event) {
        hiddenFileInput.current.click();
    }

    function handleChange(event) {
        const file = event.target.files[0];
        if (!file.type.includes('image/')) {
            setErrors({
                code: 'file-type-error',
                message: 'File type must be image/*'
            });
        } else {
            setUploading(true);
        }
    }

    return (
        <Fragment>
            <Button type="button" onClick={handleClick}>
                Choose a file
            </Button>
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
