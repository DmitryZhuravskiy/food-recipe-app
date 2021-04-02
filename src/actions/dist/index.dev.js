"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getData = exports.onSubmit = exports.onChange = void 0;

var _types = require("./types");

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var onChange = function onChange(e) {
  return {
    type: _types.CHANGE_FOOD_TYPE,
    food: e.target.value
  };
};

exports.onChange = onChange;

var onSubmit = function onSubmit(e, data) {
  e.preventDefault();
  return {
    type: _types.GET_RECIPES,
    recipes: data,
    foor: ""
  };
};

exports.onSubmit = onSubmit;

var getData = function getData(e, urlAdress) {
  return regeneratorRuntime.async(function getData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          e.preventDefault();
          return _context.abrupt("return", function (dispatch) {
            return _axios["default"].get(urlAdress).then(function (response) {
              dispatch(onSubmit(e, response.data));
            })["catch"](function (error) {
              throw error;
            });
          });

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.getData = getData;