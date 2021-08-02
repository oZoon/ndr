import { URL_HEADER } from './constants';

export default props => {
    // console.log('separateProps ', props);
    const {
        location,
        appState,
        onSaveUserData,
        onUpdateUserData,
        onMessageUpdate,
    } = props;

    const headerItem = props => {
        return {
            headerItem: {
                className:
                    location.pathname === URL_HEADER[props]
                        ? 'header-item-active'
                        : 'header-item',
            },
            headerLink: {
                to: URL_HEADER[props],
                className: 'header-item-link',
            },
            title: props.toUpperCase(),
        };
    };
    const content = {
        header: {
            headerHome: headerItem('home'),
            headerProfile: headerItem('profile'),
            headerParticipants: headerItem('participants'),
        },
        homePage: {
            onSaveUserData,
            onMessageUpdate,
            message: appState.message,
        },
        participantsPage: {
            list: appState.playerList,
        },
        profilePage: {
            onUpdateUserData,
            onMessageUpdate,
            list: appState.playerList,
            message: appState.message,
        },
    };

    return {
        content,
    };
};
