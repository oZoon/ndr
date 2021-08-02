import React from 'react';
import Text from '../so-simple/text';
import './so-simple.css';

export default props => {
    return (
        <Text className='text-cell'>
            <Text className='text-label'>Имя</Text>
            <input
                className='input'
                type='text'
                autoComplete='off'
                value={props.firstName}
                onChange={({ target: { value } }) => {
                    props.setState(actual => {
                        return {
                            ...actual,
                            data: {
                                ...actual.data,
                                firstName: value,
                            },
                            messages: {
                                ...actual.messages,
                                firstName: value.length > 0 ? '' : 'Ошибка',
                            },
                        };
                    });
                    props.onMessageUpdate('');
                }}
            />
            {props.message.length > 0 && (
                <Text className='text-message' children={props.message} />
            )}
        </Text>
    );
};
