import React from 'react';
import LayerTwo from './LayerTwo';

function LayerOne(props) {
    return (
        <div>
            LayerOne Page
            <LayerTwo/>
        </div>
    );
}

export default LayerOne;