import isNumeric from '@indlekofer/is_numeric';

const escapeRegExp = (str) => {
  //eslint-disable-next-line
  return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1');
};

export default (value, precision = null, decPoint = ',', thousandsStep = '.', round = true) => {
  if (typeof value == 'string') {
    value.trim();
    //remove thousands step
    if (thousandsStep !== null && thousandsStep !== '') {
      value = value.replace(new RegExp(escapeRegExp(thousandsStep), 'g'), '');
    }
    if (decPoint != null && decPoint !== '' && decPoint != '.') {
      value = value.replace(decPoint, '.');
    }
    if (!isNumeric(value)) return null;
    value = parseFloat(value);
  }
  if (precision === null || precision < 0) return value;
  let pow = Math.pow(10, precision);
  return round ? Math.round(value * pow)/pow : Math.floor(value * pow)/pow;  
};
