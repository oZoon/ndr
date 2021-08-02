import init from './init';
import appState from './appState';

export default (state = init, action) => {
    return {
        appState: appState(state.appState, action),
    };
};
