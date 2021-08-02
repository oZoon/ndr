import React from 'react';
import Text from './text';
import { init } from '../../lib/initial';
import './so-simple.css';

export default props => {
    return (
        <Text className='text-cell'>
            <button
                className='button'
                onClick={() => {
                    props.onSaveUserData(props.data);
                    props.setState(() => {
                        return init;
                    });
                }}
                disabled={!props.checking}
            >
                Отправить заявку
            </button>
        </Text>
    );
};
