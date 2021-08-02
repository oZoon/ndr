import packageJson from '../../../package.json';

export const VERSION = packageJson.version;

let url_site = 'http://localhost:8080';
const hostname = window && window.location && window.location.hostname;
if (hostname != 'localhost') url_site = `http://${hostname}`;
export const URL_SITE = url_site;

export const URL_HEADER = {
    home: '/',
    participants: '/participants',
    profile: '/profile',
};

export const SAVE_USER_DATA = 'SAVE_USER_DATA';
export const UPDATE_USER_DATA = 'UPDATE_USER_DATA';
export const MESSAGE_UPDATE = 'MESSAGE_UPDATE';
