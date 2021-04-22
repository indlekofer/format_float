"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _is_numeric = _interopRequireDefault(require("@indlekofer/is_numeric"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var escapeRegExp = function escapeRegExp(str) {
  //eslint-disable-next-line
  return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1');
};

var _default = function _default(value) {
  var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var decPoint = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ',';
  var thousandsStep = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '.';
  var round = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;

  if (typeof value == 'string') {
    value.trim(); //remove thousands step

    if (thousandsStep !== null && thousandsStep !== '') {
      value = value.replace(new RegExp(escapeRegExp(thousandsStep), 'g'), '');
    }

    if (decPoint != null && decPoint !== '' && decPoint != '.') {
      value = value.replace(decPoint, '.');
    }

    if (!(0, _is_numeric["default"])(value)) return null;
    value = parseFloat(value);
  }

  if (precision === null || precision < 0) return value;
  var pow = Math.pow(10, precision);
  return round ? Math.round(value * pow) / pow : Math.floor(value * pow) / pow;
};

exports["default"] = _default;