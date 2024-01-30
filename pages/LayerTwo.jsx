import React from 'react';
import LayerThree from './LayerThree';

function LayerTwo(props) {
    return (
        <div>
            LayerTwo Page
            <LayerThree/>
        </div>
    );
}

export default LayerTwo;