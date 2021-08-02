import React from 'react';
import Text from '../so-simple/text';
import { validateEmail } from '../../lib/utils';
import './so-simple.css';

export default props => {
    return (
        <Text className='text-cell'>
            <Text className='text-label'>Email</Text>
            <input
                className='input'
                type='text'
                autoComplete='off'
                value={props.email}
                readOnly={props.readonly}
                onChange={({ target: { value } }) => {
                    props.setState(actual => {
                        return {
                            ...actual,
                            data: {
                                ...actual.data,
                                email: value,
                            },
                            messages: {
                                ...actual.messages,
                                email: validateEmail(value)
                                    ? ''
                                    : 'ошибка эл. почты',
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
