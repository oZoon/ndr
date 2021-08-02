import React from 'react';
import { useState } from 'react';
import Text from '../so-simple/text';
import LastName from '../so-simple/lastName';
import FirstName from '../so-simple/firstName';
import SurName from '../so-simple/surName';
import Calendar from '../so-simple/calendar';
import Email from '../so-simple/email';
import Phone from '../so-simple/phone';
import Distance from '../so-simple/distance';
import Payment from '../so-simple/payment';
import ButtonOffer from '../so-simple/buttonOffer';
import GrantCreateProfile from '../so-simple/grantCreateProfile';
import Login from '../so-simple/login';
import Password from '../so-simple/password';
import ButtonRegAndOffer from '../so-simple/buttonRegAndOffer';
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
            <LastName
                lastName={state.data.lastName}
                setState={setState}
                message={state.messages.lastName}
                onMessageUpdate={props.onMessageUpdate}
            />
            <FirstName
                firstName={state.data.firstName}
                setState={setState}
                message={state.messages.firstName}
                onMessageUpdate={props.onMessageUpdate}
            />
            <SurName
                surName={state.data.surName}
                setState={setState}
                message={state.messages.surName}
                onMessageUpdate={props.onMessageUpdate}
            />
            <Calendar
                date={state.data.date}
                setState={setState}
                message={state.messages.date}
                onMessageUpdate={props.onMessageUpdate}
            />
            <Email
                email={state.data.email}
                setState={setState}
                message={state.messages.email}
                readonly={false}
                onMessageUpdate={props.onMessageUpdate}
            />
            <Phone
                phone={state.data.phone}
                setState={setState}
                message={state.messages.phone}
                onMessageUpdate={props.onMessageUpdate}
            />
            <Distance
                distance={state.data.distance}
                setState={setState}
                message={state.messages.distance}
                onMessageUpdate={props.onMessageUpdate}
            />
            <Payment
                payment={state.data.payment}
                setState={setState}
                message={state.messages.payment}
                onMessageUpdate={props.onMessageUpdate}
            />
            {!state.data.grantCreateProfile && (
                <ButtonOffer
                    data={state.data}
                    checking={checking[0]}
                    setState={setState}
                    onSaveUserData={props.onSaveUserData}
                    message={state.messages.offer}
                />
            )}

            <GrantCreateProfile
                grantCreateProfile={state.data.grantCreateProfile}
                setState={setState}
                checking={checking[0]}
            />

            {state.data.grantCreateProfile && (
                <>
                    <Login
                        login={state.data.email}
                        setState={setState}
                        readonly={true}
                        message={state.messages.login}
                    />
                    <Password
                        password={state.data.password}
                        setState={setState}
                        message={state.messages.password}
                    />
                    <ButtonRegAndOffer
                        data={state.data}
                        setState={setState}
                        message={state.messages.registration}
                        onSaveUserData={props.onSaveUserData}
                        checking={checking[1]}
                    />
                </>
            )}
            <Message
                onMessageUpdate={props.onMessageUpdate}
                message={props.message}
            />
        </Text>
    );
};
