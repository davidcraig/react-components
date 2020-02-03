"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Breadcrumbs = void 0;

var _react = _interopRequireDefault(require("react"));

var _link = _interopRequireDefault(require("next/link"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Breadcrumbs =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Breadcrumbs, _React$Component);

  function Breadcrumbs() {
    _classCallCheck(this, Breadcrumbs);

    return _possibleConstructorReturn(this, _getPrototypeOf(Breadcrumbs).apply(this, arguments));
  }

  _createClass(Breadcrumbs, [{
    key: "crumbIsValid",

    /**
     * Verify that breadcrumb has valid attributes.
     * @param crumb
     * @returns {boolean}
     */
    value: function crumbIsValid(crumb) {
      var hasUrl = typeof crumb.url !== 'undefined';
      var hasName = typeof crumb.name !== 'undefined';

      if (crumb.active) {
        return hasName;
      }

      return hasUrl && hasName;
    }
  }, {
    key: "crumb",
    value: function crumb(c) {
      if (!this.crumbIsValid(c)) {
        return "";
      }

      if (c.active) {
        return _react["default"].createElement("li", {
          className: "is-active",
          key: c.name
        }, _react["default"].createElement("a", {
          href: "#",
          "aria-current": "page"
        }, c.name));
      }

      return _react["default"].createElement("li", {
        key: c.name
      }, _react["default"].createElement(_link["default"], {
        href: c.url
      }, _react["default"].createElement("a", null, c.name)));
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var crumbs = this.props.crumbs;
      return _react["default"].createElement("nav", {
        className: "breadcrumb has-succeeds-separator",
        "aria-label": "breadcrumbs"
      }, _react["default"].createElement("ul", null, crumbs.map(function (c) {
        return _this.crumb(c);
      })));
    }
  }]);

  return Breadcrumbs;
}(_react["default"].Component);

exports.Breadcrumbs = Breadcrumbs;
Breadcrumbs.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "crumbIsValid",
    "docblock": "Verify that breadcrumb has valid attributes.\n@param crumb\n@returns {boolean}",
    "modifiers": [],
    "params": [{
      "name": "crumb",
      "description": null,
      "type": null,
      "optional": false
    }],
    "returns": {
      "description": null,
      "type": {
        "name": "boolean"
      }
    },
    "description": "Verify that breadcrumb has valid attributes."
  }, {
    "name": "crumb",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "c",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "Breadcrumbs"
};