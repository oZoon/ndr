import {
    SAVE_USER_DATA,
    UPDATE_USER_DATA,
    MESSAGE_UPDATE,
} from '../../lib/constants';

export default (state, action) => {
    switch (action.type) {
        case SAVE_USER_DATA:
            return Object.assign({}, state, {
                ...state,
                playerList:
                    state.playerList.filter(
                        player => player.email == action.player?.email,
                    ).length == 0
                        ? state.playerList.concat(action.player)
                        : state.playerList,
                message:
                    state.playerList.filter(
                        player => player.email == action.player.email,
                    ).length != 0
                        ? 'Ошибка: существующий email'
                        : 'Успешно',
            });

        case UPDATE_USER_DATA:
            return Object.assign({}, state, {
                ...state,
                playerList: state.playerList.map(player => {
                    return player.email == action.player.email
                        ? action.player
                        : player;
                }),
                message: 'Успех: профиль обновлён',
            });

        case MESSAGE_UPDATE:
            return Object.assign({}, state, {
                ...state,
                message: action.data,
            });

        default:
            return state;
    }
};
