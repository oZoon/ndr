import React from 'react';

import LastName from '../so-simple/lastName';
import FirstName from '../so-simple/firstName';
import SurName from '../so-simple/surName';
import Calendar from '../so-simple/calendar';
import Email from '../so-simple/email';
import Phone from '../so-simple/phone';
import Distance from '../so-simple/distance';
import Payment from '../so-simple/payment';
import ButtonUpdate from '../so-simple/buttonUpdate';

export default props => {
    return (
        <>
            <LastName
                lastName={props.state.data.lastName}
                setState={props.setState}
                message={props.state.messages.lastName}
                onMessageUpdate={props.onMessageUpdate}
            />
            <FirstName
                firstName={props.state.data.firstName}
                setState={props.setState}
                message={props.state.messages.firstName}
                onMessageUpdate={props.onMessageUpdate}
            />
            <SurName
                surName={props.state.data.surName}
                setState={props.setState}
                message={props.state.messages.surName}
                onMessageUpdate={props.onMessageUpdate}
            />
            <Calendar
                date={props.state.data.date}
                setState={props.setState}
                message={props.state.messages.date}
                onMessageUpdate={props.onMessageUpdate}
            />
            <Email
                email={props.state.data.email}
                setState={props.setState}
                message={props.state.messages.email}
                readonly={true}
                onMessageUpdate={props.onMessageUpdate}
            />
            <Phone
                phone={props.state.data.phone}
                setState={props.setState}
                message={props.state.messages.phone}
                onMessageUpdate={props.onMessageUpdate}
            />
            <Distance
                distance={props.state.data.distance}
                setState={props.setState}
                message={props.state.messages.distance}
                onMessageUpdate={props.onMessageUpdate}
            />
            <Payment
                payment={props.state.data.payment}
                setState={props.setState}
                message={props.state.messages.payment}
                onMessageUpdate={props.onMessageUpdate}
            />
            <ButtonUpdate
                data={props.state.data}
                onUpdateUserData={props.onUpdateUserData}
                checking={props.checking}
            />
        </>
    );
};
