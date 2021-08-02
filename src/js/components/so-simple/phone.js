import React from 'react';
import Text from '../so-simple/text';
import InputPhone from 'react-phone-number-input/input';
import './so-simple.css';

export default props => {
    return (
        <Text className='text-cell'>
            <Text className='text-label'>Номер телефона</Text>
            <InputPhone
                international={true}
                withCountryCallingCode={true}
                country='RU'
                className='input'
                value={props.phone}
                onChange={value => {
                    props.setState(actual => {
                        return {
                            ...actual,
                            data: {
                                ...actual.data,
                                phone: value,
                            },
                            messages: {
                                ...actual.messages,
                                phone:
                                    value.length == 12 ? '' : 'Ошибка номера',
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
