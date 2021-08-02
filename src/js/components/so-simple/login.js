import React from 'react';
import Text from './text';
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
                value={props.login}
                readOnly={props.readonly}
                onChange={({ target: { value } }) => {
                    props.setState(actual => {
                        return {
                            ...actual,
                            data: {
                                ...actual.data,
                                login: value,
                            },
                            messages: {
                                ...actual.messages,
                                login: validateEmail(value)
                                    ? ''
                                    : 'Ошибка логина',
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
