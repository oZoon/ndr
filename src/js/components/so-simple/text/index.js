import React from 'react';
import './text.css';

export default props => {
    // console.log('text ', props);
    return (
        <span style={props.style || {}} className={props.className || 'text'}>
            {props.children}
        </span>
    );
};
