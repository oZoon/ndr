import React from 'react';
import Text from './text';
import { validateEmail, validatePassword } from '../../lib/utils';
import './so-simple.css';

export default props => {
    const checkLoginData = () => {
        const playerData = props.list.filter(
            item =>
                item.email === props.login && item.password === props.password,
        );
        return [playerData.length > 0, playerData[0]];
    };

    return (
        <Text className='text-cell'>
            <button
                className='button'
                onClick={() => {
                    if (
                        validateEmail(props.login) &&
                        validatePassword(props.password)
                    ) {
                        const check = checkLoginData();
                        props.setState(actual => {
                            return {
                                ...actual,
                                logged: check[0],
                                data: check[1],
                                messages: {
                                    ...actual.messages,
                                    auth: check[0] ? '' : 'Ошибка авторизации',
                                },
                            };
                        });
                    }
                }}
                disabled={
                    !(
                        validateEmail(props.login) &&
                        validatePassword(props.password)
                    )
                }
            >
                Авторизация
            </button>
            {props.message.length > 0 && (
                <Text className='text-message-login' children={props.message} />
            )}
        </Text>
    );
};
