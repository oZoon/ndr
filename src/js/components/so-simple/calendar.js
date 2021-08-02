import React from 'react';
import Text from '../so-simple/text';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { validateDate } from '../../lib/utils';
import './so-simple.css';

export default props => {
    return (
        <Text className='text-cell'>
            <Text className='text-label'>Дата рождения</Text>
            <DatePicker
                className='input'
                peekNextMonth={true}
                showMonthDropdown={true}
                showYearDropdown={true}
                dropdownMode='select'
                dateFormat='dd.MM.yyyy'
                selected={props.date}
                onChange={value => {
                    props.setState(actual => {
                        return {
                            ...actual,
                            data: {
                                ...actual.data,
                                date: value,
                            },
                            messages: {
                                ...actual.messages,
                                date: validateDate(value)
                                    ? ''
                                    : 'меньше 14 лет',
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
