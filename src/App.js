import React from 'react';

import './App.css';

import Dropzone from './components/dropzone/dropzone.component';
import FileUploader from './components/file-uploader/file-uploader.component';

function App() {
    return (
        <div className="App">
            <div className="App__heading">Upload your image</div>
            <div className="App__subheading">File should be Jpeg, Png, ...</div>
            <Dropzone />
            <div className="fs-12 text-grey-3" style={{ marginBottom: '20px' }}>
                Or
            </div>
            <FileUploader />
        </div>
    );
}

export default App;
