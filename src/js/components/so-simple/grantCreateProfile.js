import React from 'react';
import Text from '../so-simple/text';
import './so-simple.css';

export default props => {
    return (
        <Text className='text-cell'>
            <Text className='text-label-checkbox'>Согласие на регистрацию</Text>
            <input
                className='checkbox'
                type='checkbox'
                disabled={!props.checking}
                value={props.grantCreateProfile}
                onChange={({ target: { checked } }) => {
                    props.setState(actual => {
                        return {
                            ...actual,
                            data: {
                                ...actual.data,
                                grantCreateProfile: checked,
                            },
                        };
                    });
                }}
            />
        </Text>
    );
};
