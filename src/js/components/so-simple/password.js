import React from 'react';
import Text from '../so-simple/text';
import { validatePassword } from '../../lib/utils';
import './so-simple.css';

export default props => {
    return (
        <Text className='text-cell'>
            <Text className='text-label'>Password</Text>
            <input
                className='input'
                type='password'
                autoComplete='off'
                value={props.password}
                onChange={({ target: { value } }) => {
                    props.setState(actual => {
                        return {
                            ...actual,
                            data: {
                                ...actual.data,
                                password: value,
                            },
                            messages: {
                                ...actual.messages,
                                password: validatePassword(value)
                                    ? ''
                                    : 'Ошибка',
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
