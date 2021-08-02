import React from 'react';
import Text from './text';
import './so-simple.css';

export default props => {
    return (
        props.message.length > 0 && (
            <Text className='text-cell-message'>
                <Text className='text-message-redux'>
                    {props.message}
                    <input
                        type='button'
                        value='X'
                        className='button-close'
                        onClick={() => {
                            props.onMessageUpdate('');
                        }}
                    />
                </Text>
            </Text>
        )
    );
};
