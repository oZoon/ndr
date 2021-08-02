import React from 'react';
import { Link } from 'react-router-dom';
// import { URL_HEADER } from '../../../lib/constants';
import Text from '../../so-simple/text';
import './headerItem.css';

export default props => {
    return (
        <Text {...props.headerItem}>
            <Link {...props.headerLink}>{props.title}</Link>
        </Text>
    );
};

// className='header-item'>
//  to={URL_HEADER[props.link]} className='header-item-link'
