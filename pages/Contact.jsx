import React from 'react';
import LayerOne from "./LayerOne";

function Contact(props) {
    return (
        <div>
            {props.title}
            <LayerOne username={props.username}/>
        </div>
    );
}

export default Contact;