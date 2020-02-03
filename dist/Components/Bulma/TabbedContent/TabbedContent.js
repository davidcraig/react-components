"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.TabbedContent = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * TabbedContent
 *
 * @param {Object} props
 * @param {Object[]} props.content - Array of tabs/content.
 * @param {string} props.content[].title - Tab title.
 * @param {any} props.content[].content - Tab content.
 */
var TabbedContent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TabbedContent, _React$Component);

  function TabbedContent(props) {
    var _this;

    _classCallCheck(this, TabbedContent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TabbedContent).call(this, props));
    _this.state = {
      activeTab: _this.setDefaultTab()
    };
    _this.changeTab = _this.changeTab.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(TabbedContent, [{
    key: "setDefaultTab",
    value: function setDefaultTab() {
      return Object.keys(this.props.content).slice(0, 1)[0];
    }
  }, {
    key: "changeTab",
    value: function changeTab(e) {
      var key = e.target.attributes['data-tab'].value;
      this.setState({
        activeTab: key
      });
    }
  }, {
    key: "renderTabs",
    value: function renderTabs() {
      var _this2 = this;

      var content = this.props.content;
      return Object.keys(content).map(function (key) {
        if (key === _this2.state.activeTab) {
          return _react["default"].createElement("li", {
            key: key,
            className: "is-active"
          }, content[key].title);
        } else {
          return _react["default"].createElement("li", {
            key: key
          }, _react["default"].createElement("a", {
            "data-tab": key,
            onClick: _this2.changeTab
          }, content[key].title));
        }
      });
    }
  }, {
    key: "renderActiveTabContent",
    value: function renderActiveTabContent() {
      var tabKey = this.state.activeTab;
      return this.props.content[tabKey].content;
    }
  }, {
    key: "render",
    value: function render() {
      if (Object.keys(this.props.content).length > 0) {
        var tabs = _react["default"].createElement("div", {
          className: "tabs"
        }, _react["default"].createElement("ul", null, this.renderTabs()));

        var content = this.renderActiveTabContent();
        return _react["default"].createElement(_react["default"].Fragment, null, tabs, content);
      }

      return '';
    }
  }]);

  return TabbedContent;
}(_react["default"].Component);

exports.TabbedContent = TabbedContent;
TabbedContent.propTypes = {
  content: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    title: _propTypes["default"].string.isRequired,
    content: _propTypes["default"].string.isRequired
  }))
};
TabbedContent.__docgenInfo = {
  "description": "TabbedContent\n\n@param {Object} props\n@param {Object[]} props.content - Array of tabs/content.\n@param {string} props.content[].title - Tab title.\n@param {any} props.content[].content - Tab content.",
  "methods": [{
    "name": "setDefaultTab",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "changeTab",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "e",
      "type": null
    }],
    "returns": null
  }, {
    "name": "renderTabs",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }, {
    "name": "renderActiveTabContent",
    "docblock": null,
    "modifiers": [],
    "params": [],
    "returns": null
  }],
  "displayName": "TabbedContent",
  "props": {
    "content": {
      "type": {
        "name": "arrayOf",
        "value": {
          "name": "shape",
          "value": {
            "title": {
              "name": "string",
              "required": true
            },
            "content": {
              "name": "string",
              "required": true
            }
          }
        }
      },
      "required": false,
      "description": ""
    }
  }
};
var _default = TabbedContent;
exports["default"] = _default;