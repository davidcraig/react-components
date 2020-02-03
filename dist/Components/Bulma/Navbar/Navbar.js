"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Brand = Brand;
exports.Dropdown = Dropdown;
exports.End = End;
exports.Start = Start;
exports.Item = Item;
exports["default"] = Navbar;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Brand
 * @param { Object } props
 * @param { String='/' } props.href - Location where the brand should link to
 * @param { String } props.title - Brand name
 */
function Brand(props) {
  return _react["default"].createElement("div", {
    className: "navbar-brand"
  }, _react["default"].createElement("a", {
    href: props.href ? props.href : '/',
    className: "navbar-item"
  }, props.title));
}
/**
 * Dropdown
 * @param { Object } props
 * @param { String } props.title - Dropdown link title
 * @param { Object } props.children - Navbar Items
 */


function Dropdown(props) {
  return _react["default"].createElement("div", {
    className: "navbar-item has-dropdown is-hoverable"
  }, _react["default"].createElement("a", {
    className: "navbar-link"
  }, props.title), _react["default"].createElement("div", {
    className: "navbar-dropdown"
  }, props.children));
}
/**
 * Navbar End
 * Items at the end of the navbar (right side).
 * @param {*} props 
 */


function End(props) {
  return _react["default"].createElement("div", {
    className: "navbar-end"
  }, props.children);
}
/**
 * Navbar Start
 * Items on the left side of the navbar.
 * @param {*} props 
 */


function Start(props) {
  return _react["default"].createElement("div", {
    className: "navbar-start"
  }, props.children);
}
/**
 * Navbar Item 
 * @param {*} props 
 * @param { String } props.href - Link location.
 * @param { String } props.title - Link title.
 */


function Item(props) {
  return _react["default"].createElement("a", {
    href: props.href,
    className: "navbar-item ".concat(props.className)
  }, props.title);
}
/**
 * Navbar
 * @param {*} props 
 */


function Navbar(props) {
  return _react["default"].createElement("div", {
    className: props.dark ? "navbar is-dark" : "navbar"
  }, props.children);
}

Brand.__docgenInfo = {
  "description": "Brand\n@param { Object } props\n@param { String='/' } props.href - Location where the brand should link to\n@param { String } props.title - Brand name",
  "methods": [],
  "displayName": "Brand"
};
Dropdown.__docgenInfo = {
  "description": "Dropdown\n@param { Object } props\n@param { String } props.title - Dropdown link title\n@param { Object } props.children - Navbar Items",
  "methods": [],
  "displayName": "Dropdown"
};
End.__docgenInfo = {
  "description": "Navbar End\nItems at the end of the navbar (right side).\n@param {*} props",
  "methods": [],
  "displayName": "End"
};
Start.__docgenInfo = {
  "description": "Navbar Start\nItems on the left side of the navbar.\n@param {*} props",
  "methods": [],
  "displayName": "Start"
};
Item.__docgenInfo = {
  "description": "Navbar Item \n@param {*} props \n@param { String } props.href - Link location.\n@param { String } props.title - Link title.",
  "methods": [],
  "displayName": "Item"
};
Navbar.__docgenInfo = {
  "description": "Navbar\n@param {*} props",
  "methods": [],
  "displayName": "Navbar"
};