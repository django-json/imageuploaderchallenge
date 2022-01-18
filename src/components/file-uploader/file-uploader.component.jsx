import React, { Fragment, useRef } from 'react';

import Button from '../button/button.component';

import { uploadImage } from '../../utils/utils';

function FileUploader({ setErrors, setUploading, setUploaded, setResult }) {
    const hiddenFileInput = useRef(null);

    function handleClick(event) {
        hiddenFileInput.current.click();
    }

    async function handleChange(event) {
        const file = event.target.files[0];
        if (!file.type.includes('image/')) {
            setErrors({
                code: 'file-type-error',
                message: 'File type must be image/*'
            });
        } else {
            setUploading(true);
            const result = await uploadImage(file, 'file');
            if (result) {
                setUploading(false);
                setResult(result);
                setUploaded(true);
            }
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
