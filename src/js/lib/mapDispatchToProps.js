import {
    saveUserData,
    updateUserData,
    messageUpdate,
} from '../core/actions/appState';

export default dispatch => ({
    onSaveUserData: data => dispatch(saveUserData(data)),
    onUpdateUserData: data => dispatch(updateUserData(data)),
    onMessageUpdate: data => dispatch(messageUpdate(data)),
});
