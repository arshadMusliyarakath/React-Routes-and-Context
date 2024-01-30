import React, { useContext } from 'react';
import { AppContext } from '../AppContext';



function LayerThree(props) {

    const {username} = useContext(AppContext);
    return (
        <div>
            LayerThree Page  - username : {username}
            
        </div>
    );
}

export default LayerThree;