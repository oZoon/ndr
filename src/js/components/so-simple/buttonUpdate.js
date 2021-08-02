import React from 'react';
import Text from './text';
import './so-simple.css';

export default props => {
    return (
        <Text className='text-cell'>
            <button
                className='button'
                onClick={() => {
                    props.onUpdateUserData(props.data);
                }}
                disabled={!props.checking}
            >
                Сохранить
            </button>
        </Text>
    );
};
