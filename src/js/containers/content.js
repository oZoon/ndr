import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { URL_HEADER } from '../lib/constants';

import Text from '../components/so-simple/text';
import Header from '../components/simple/header';

import Home from '../components/routes/home';
import Participants from '../components/routes/participants';
import Profile from '../components/routes/profile';

import { registerLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru';
registerLocale('ru', ru);

import './content.css';

export default props => {
    return (
        <Text className='content'>
            <Header {...props.header} />
            <Switch>
                <Route
                    exact
                    path={URL_HEADER.home}
                    render={() => <Home {...props.homePage} />}
                />
                <Route
                    path={`${URL_HEADER.participants}/`}
                    render={() => <Participants {...props.participantsPage} />}
                />
                <Route
                    path={`${URL_HEADER.profile}/`}
                    render={() => <Profile {...props.profilePage} />}
                />
            </Switch>
        </Text>
    );
};
