import React, { useState } from 'react';

import { ImageUploaderWrapper } from './imageuploader.styles';

import UploadPage from '../../pages/upload/upload.component';
import UploadOverviewPage from '../../pages/upload-overview/upload-overview.component';

import WithLoader from '../../components/with-loader/with-loader.component';

const UploadPageWithLoader = WithLoader(UploadPage);

function ImageUploader() {
    const [uploading, setUploading] = useState(false);
    const [uploaded, setUploaded] = useState(false);
    const [result, setResult] = useState(null);

    return (
        <ImageUploaderWrapper>
            {!uploaded && (
                <UploadPageWithLoader
                    isLoading={uploading}
                    setUploading={setUploading}
                    setUploaded={setUploaded}
                    setResult={setResult}
                />
            )}
            {uploaded && <UploadOverviewPage result={result} />}
        </ImageUploaderWrapper>
    );
}

export default ImageUploader;
