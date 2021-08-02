import React from 'react';
import { useState } from 'react';
import Text from '../so-simple/text';
import ProfileLogin from '../simple/profileLogin';
import ProfileUpdate from '../simple/profileUpdate';
import Message from '../so-simple/message';
import { init } from '../../lib/initial';
import { validateRegistration } from '../../lib/utils';
import './routes.css';

export default props => {
    const [state, setState] = useState(() => {
        return init;
    });
    const checking = validateRegistration(state.data);

    return (
        <Text className='routes'>
            {!state.logged && (
                <ProfileLogin
                    state={state}
                    setState={setState}
                    list={props.list}
                    onMessageUpdate={props.onMessageUpdate}
                />
            )}
            {state.logged && (
                <>
                    <ProfileUpdate
                        state={state}
                        setState={setState}
                        onUpdateUserData={props.onUpdateUserData}
                        checking={checking[0]}
                        onMessageUpdate={props.onMessageUpdate}
                    />

                    <Message
                        onMessageUpdate={props.onMessageUpdate}
                        message={props.message}
                    />
                </>
            )}
        </Text>
    );
};
