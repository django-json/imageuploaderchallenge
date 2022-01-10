import React from 'react';
import { useDropzone } from 'react-dropzone';

import { Container, Label, Logo } from './dropzone.styles';

function Dropzone(props) {
    const {
        getRootProps,
        getInputProps,
        isDragActive,
        isDragAccept,
        isDragReject
    } = useDropzone({ accept: 'image/*' });

    return (
        <div className="dropzone">
            <Container
                {...getRootProps({ isDragActive, isDragAccept, isDragReject })}
            >
                <input {...getInputProps()} />
                <Logo
                    src={require('../../assets/img/image.svg').default}
                    alt="File Upload"
                />
                <Label>Drag & Drop your image here</Label>
            </Container>
        </div>
    );
}

export default Dropzone;
