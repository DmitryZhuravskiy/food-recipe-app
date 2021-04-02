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
    food: ""
  };
};

exports.onSubmit = onSubmit;

var getData = function getData(e, food) {
  return function _callee(dispatch) {
    var url, res;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            e.preventDefault();
            url = food !== '' ? "https://api.edamam.com/search?q=".concat(food, "&app_id=").concat(_types.APP_ID, "&app_key=").concat(_types.APP_KEY) : "https://api.edamam.com/search?q=pizza&app_id=".concat(_types.APP_ID, "&app_key=").concat(_types.APP_KEY);
            _context.prev = 2;
            _context.next = 5;
            return regeneratorRuntime.awrap((0, _axios["default"])({
              baseURL: url,
              method: "GET"
            }));

          case 5:
            res = _context.sent;
            dispatch(onSubmit(e, res.data.hits));
            _context.next = 12;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](2);
            throw _context.t0;

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[2, 9]]);
  };
};

exports.getData = getData;