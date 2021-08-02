import {
    SAVE_USER_DATA,
    UPDATE_USER_DATA,
    MESSAGE_UPDATE,
} from '../../lib/constants';

export const saveUserData = data => {
    const player = {
        createdAt: +new Date(),
        date: +data.date,
        distance: data.distance,
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        payment: data.payment,
        name: `${data.lastName} ${data.firstName} ${data.surName}`,
        password: data.password,
        phone: data.phone,
        surName: data.surName,
    };
    return {
        type: SAVE_USER_DATA,
        player,
    };
};
export const updateUserData = data => {
    const player = {
        createdAt: +data.createdAt,
        date: +data.date,
        distance: data.distance,
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        payment: data.payment,
        name: `${data.lastName} ${data.firstName} ${data.surName}`,
        password: data.password,
        phone: data.phone,
        surName: data.surName,
    };
    return {
        type: UPDATE_USER_DATA,
        player,
    };
};

export const messageUpdate = data => {
    return {
        type: MESSAGE_UPDATE,
        data,
    };
};
