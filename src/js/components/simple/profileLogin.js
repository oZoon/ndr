import React from 'react';
import Login from '../so-simple/login';
import Password from '../so-simple/password';
import ButtonLogin from '../so-simple/buttonLogin';

export default props => {
    return (
        <>
            <Login
                login={props.state.data.login}
                setState={props.setState}
                message={props.state.messages.login}
                readonly={false}
                onMessageUpdate={props.onMessageUpdate}
            />
            <Password
                password={props.state.data.password}
                setState={props.setState}
                message={props.state.messages.password}
                onMessageUpdate={props.onMessageUpdate}
            />
            <ButtonLogin
                login={props.state.data.login}
                password={props.state.data.password}
                setState={props.setState}
                message={props.state.messages.auth}
                list={props.list}
            />
        </>
    );
};
