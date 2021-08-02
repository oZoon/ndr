import React from 'react';
import Text from '../so-simple/text';
import MaskInput from 'react-text-mask';
import { validatePayment } from '../../lib/utils';
import './so-simple.css';

export default props => {
    return (
        <Text className='text-cell'>
            <Text className='text-label'>Сумма взноса, руб</Text>
            <MaskInput
                mask={[/\d/, /\d/, /\d/, /\d/, /\d/]}
                guide={false}
                className='input'
                value={props.payment}
                onChange={({ target: { value } }) => {
                    props.setState(actual => {
                        return {
                            ...actual,
                            data: {
                                ...actual.data,
                                payment: value,
                            },
                            messages: {
                                ...actual.messages,
                                payment: validatePayment(value) ? '' : 'Ошибка',
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
