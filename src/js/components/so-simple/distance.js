import React from 'react';
import Text from '../so-simple/text';
import './so-simple.css';

export default props => {
    return (
        <Text className='text-cell'>
            <Text className='text-label'>Выбор дистанции</Text>
            <select
                className='input'
                style={{ width: '330px' }}
                value={props.distance}
                onChange={({ target: { value } }) => {
                    props.setState(actual => {
                        return {
                            ...actual,
                            data: {
                                ...actual.data,
                                distance: parseInt(value),
                            },
                            messages: {
                                ...actual.messages,
                                distance: value ? '' : 'Ошибка',
                            },
                        };
                    });
                    props.onMessageUpdate('');
                }}
            >
                <option
                    value=''
                    disabled
                    style={{ height: 0, display: 'none' }}
                ></option>
                <option value='3'>3 км</option>
                <option value='5'>5 км</option>
                <option value='10'>10 км</option>
            </select>

            {props.message.length > 0 && (
                <Text className='text-message' children={props.message} />
            )}
        </Text>
    );
};
