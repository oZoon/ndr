import records from '../../lib/records';
import { VERSION } from '../../lib/constants';
import players from '../../lib/data.json';

let init = {
    appState: {
        playerList: players.users.map(function (user) {
            return {
                ...user,
                date: +new Date(user.date),
                createdAt: +new Date(),
            };
        }),
        // createdAt: +new Date(),
        // date: +data.date,
        // distance: data.distance,
        // email: data.email,
        // firstName: data.firstName,
        // lastName: data.lastName,
        // payment: data.payment,
        // password: data.password,
        // phone: data.phone,
        // surName: data.surName,
        message: '',
    },
};

const initStore = records.getRecord(`ndr-${VERSION}`);
init = initStore !== null ? initStore : init;
records.setRecord(`ndr-${VERSION}`, init);

export default init;
