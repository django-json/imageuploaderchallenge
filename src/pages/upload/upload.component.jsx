import React, { useState } from 'react';

import './upload.styles.css';

import Dropzone from '../../components/dropzone/dropzone.component';
import FileUploader from '../../components/file-uploader/file-uploader.component';

function UploadPage({ setUploading, setUploaded, setResult }) {
    const [errors, setErrors] = useState(null);

    return (
        <div className="upload-page">
            <div className="upload-page__heading">Upload your image</div>
            <div className="upload-page__subheading">
                File should be Jpeg, Png, ...
            </div>
            <Dropzone
                setErrors={setErrors}
                setUploading={setUploading}
                setUploaded={setUploaded}
                setResult={setResult}
            />
            <div className="fs-12 text-grey-3" style={{ marginBottom: '20px' }}>
                Or
            </div>
            <FileUploader
                setErrors={setErrors}
                setUploading={setUploading}
                setUploaded={setUploaded}
                setResult={setResult}
            />
            {errors && (
                <div className="upload-page__error">{`* ${errors.message}`}</div>
            )}
        </div>
    );
}

export default UploadPage;
