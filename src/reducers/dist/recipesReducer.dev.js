"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = recipesReducer;

var _types = require("../actions/types");

var _initialState = _interopRequireDefault(require("./initialState"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function recipesReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _initialState["default"];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _types.CHANGE_FOOD_TYPE:
      return _objectSpread({}, state, {
        food: action.food,
        urlAdress: "https://api.edamam.com/search?q=".concat(action.food, "&app_id=").concat(_types.APP_ID, "&app_key=").concat(_types.APP_KEY)
      });

    case _types.GET_RECIPES:
      return _objectSpread({}, state, {
        recipes: action.recipes
      });

    default:
      return state;
  }
}