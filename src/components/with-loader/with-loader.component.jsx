import React from 'react';

import Loader from '../loader/loader.component';

function WithLoader(WrappedComponent) {
    return function ({ isLoading, ...otherProps }) {
        return isLoading ? <Loader /> : <WrappedComponent {...otherProps} />;
    };
}

export default WithLoader;
