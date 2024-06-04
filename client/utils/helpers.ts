import moment from 'moment';
require('moment/locale/tr');

export const dateFormater = (date: Date | string | number) => {
  const russianDateFormat = 'DD.MM.YYYY HH:mm';
  moment.locale('ru'); 
  return moment(date).format(russianDateFormat);
}

export const onlyDate = (date: Date | string | number) => {
    const russianDateFormat = 'DD.MM.YYYY';
    moment.locale('ru'); 
    return moment(date).format(russianDateFormat);
  }

export const priceMasking = (price: number, currency: string) => {
    let maskedPrice = price.toLocaleString('tr-TR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

    if (currency === 'USD') {
        maskedPrice =  maskedPrice + '$';
    } else if (currency === 'SOM') {
        maskedPrice = maskedPrice + ' сом';
    }

    return maskedPrice;
}