export const timestampToDateTime = timestamp => {
    const timeDate = new Date(timestamp / 1);
    return `${leadingZero(timeDate.getDate())}-${leadingZero(
        timeDate.getMonth() + 1,
    )}-${timeDate.getFullYear()}`;
};
const leadingZero = n => {
    return n < 10 ? '0' + n : n;
};

export const validateEmail = email => {
    if (email.length < 4) return true;
    const emailCheck =
        /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return emailCheck.test(email);
};
export const validateDate = date => {
    const temp =
        date instanceof Date
            ? date
            : +new Date(date) == date
            ? new Date(date)
            : false;
    return temp instanceof Date
        ? new Date(
              temp.getMonth() +
                  1 +
                  '.' +
                  temp.getDate() +
                  '.' +
                  (temp.getFullYear() + 14),
          ) <= new Date()
        : temp instanceof Date;
};
export const validatePhone = phone => {
    return phone.length == 12;
};
export const validatePayment = payment => {
    return parseInt(payment) <= 10000 && parseInt(payment) >= 100;
};
export const validateOffer = data => {
    // console.log(data.firstName.length > 0);
    // console.log(data.surName.length > 0);
    // console.log(data.lastName.length > 0);
    // console.log(validateDate(data.date));
    // console.log(validateEmail(data.email));
    // console.log(validatePhone(data.phone));
    // console.log([3, 5, 10].includes(data.distance));
    // console.log(validatePayment(data.payment));
    // console.log('empty');

    return (
        data.firstName.length > 0 &&
        data.surName.length > 0 &&
        data.lastName.length > 0 &&
        validateDate(data.date) &&
        validateEmail(data.email) &&
        validatePhone(data.phone) &&
        [3, 5, 10].includes(data.distance) &&
        validatePayment(data.payment)
    );
};
export const validateRegistration = data => {
    // console.log(data);
    const offer = validateOffer(data);
    return [
        offer,
        offer &&
            data.grantCreateProfile &&
            data.password.length >= 3 &&
            data.password.length <= 10,
    ];
};
export const validatePassword = password => {
    return password.length >= 3 && password.length <= 10;
};
