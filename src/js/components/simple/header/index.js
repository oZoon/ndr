import React from 'react';

import HeaderItem from '../headerItem';
import Text from '../../so-simple/text';
import './header.css';

export default props => {
    return (
        <Text className='header'>
            <Text className='container'>
                <HeaderItem {...props.headerHome} />
                <HeaderItem {...props.headerParticipants} />
                <HeaderItem {...props.headerProfile} />
            </Text>
        </Text>
    );
};
