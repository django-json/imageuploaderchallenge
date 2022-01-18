import React from 'react';

import { ImageUploaderContainer } from './App.jsx';

import ImageUploader from './components/imageuploader/imageuploader.component';
import Footer from './components/footer/footer.component';

function App() {
    return (
        <ImageUploaderContainer>
            <ImageUploader />
            <Footer />
        </ImageUploaderContainer>
    );
}

export default App;
