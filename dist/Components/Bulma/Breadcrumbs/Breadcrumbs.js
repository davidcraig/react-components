"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Breadcrumb = Breadcrumb;
exports.Breadcrumbs = Breadcrumbs;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Breadcrumb (Bulma)
 * @param {*} props 
 */
function Breadcrumb(props) {
  if (props.active) {
    return _react["default"].createElement("li", {
      className: "is-active",
      key: "".concat(props.name, "-breadcrumb")
    }, _react["default"].createElement("a", {
      href: "#",
      "aria-current": "page"
    }, props.name));
  }

  return _react["default"].createElement("li", {
    key: "".concat(props.name, "-breadcrumb")
  }, _react["default"].createElement("a", {
    href: props.href
  }, props.name));
}
/**
 * Breadcrumbs (Bulma)
 * @param {*} props 
 */


function Breadcrumbs(props) {
  return _react["default"].createElement("nav", {
    className: "breadcrumb has-succeeds-separator",
    "aria-label": "breadcrumbs"
  }, _react["default"].createElement("ul", null, props.children));
}

Breadcrumbs.defaultProps = {
  "class": 'has-succeeds-seperator'
};
Breadcrumb.__docgenInfo = {
  "description": "Breadcrumb (Bulma)\n@param {*} props",
  "methods": [],
  "displayName": "Breadcrumb"
};
Breadcrumbs.__docgenInfo = {
  "description": "Breadcrumbs (Bulma)\n@param {*} props",
  "methods": [],
  "displayName": "Breadcrumbs",
  "props": {
    "class": {
      "defaultValue": {
        "value": "'has-succeeds-seperator'",
        "computed": false
      },
      "required": false
    }
  }
};