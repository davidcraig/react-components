"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ActiveBreadcrumb = ActiveBreadcrumb;
exports.Breadcrumb = Breadcrumb;
exports.Breadcrumbs = Breadcrumbs;

var _react = _interopRequireDefault(require("react"));

var _gatsby = require("gatsby");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ActiveBreadcrumb(props) {
  return _react["default"].createElement("li", {
    className: "is-active",
    key: "".concat(props.name, "-breadcrumb")
  }, _react["default"].createElement("a", {
    href: "#",
    "aria-current": "page"
  }, props.name));
}

ActiveBreadcrumb.propTypes = {
  name: _propTypes["default"].string.isRequired,
  href: _propTypes["default"].string.isRequired
};
/**
 * Breadcrumb (Gatsby + Bulma)
 * @param {*} props
 */

function Breadcrumb(props) {
  return _react["default"].createElement("li", {
    key: "".concat(props.title, "-breadcrumb")
  }, _react["default"].createElement(_gatsby.Link, {
    to: props.href
  }, _react["default"].createElement("a", null, props.title)));
}

Breadcrumb.propTypes = {
  title: _propTypes["default"].string.isRequired,
  href: _propTypes["default"].string.isRequired
};
/**
 * Breadcrumbs (Gatsby + Bulma)
 * @param {*} props
 */

function Breadcrumbs(props) {
  return _react["default"].createElement("nav", {
    className: "breadcrumb has-succeeds-separator",
    "aria-label": "breadcrumbs"
  }, _react["default"].createElement("ul", null, props.children));
}

Breadcrumbs.propTypes = {
  children: _propTypes["default"].any
};
Breadcrumbs.defaultProps = {
  "class": 'has-succeeds-seperator'
};
ActiveBreadcrumb.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ActiveBreadcrumb",
  "props": {
    "name": {
      "type": {
        "name": "string"
      },
      "required": true,
      "description": ""
    },
    "href": {
      "type": {
        "name": "string"
      },
      "required": true,
      "description": ""
    }
  }
};
Breadcrumb.__docgenInfo = {
  "description": "Breadcrumb (Gatsby + Bulma)\n@param {*} props",
  "methods": [],
  "displayName": "Breadcrumb",
  "props": {
    "title": {
      "type": {
        "name": "string"
      },
      "required": true,
      "description": ""
    },
    "href": {
      "type": {
        "name": "string"
      },
      "required": true,
      "description": ""
    }
  }
};
Breadcrumbs.__docgenInfo = {
  "description": "Breadcrumbs (Gatsby + Bulma)\n@param {*} props",
  "methods": [],
  "displayName": "Breadcrumbs",
  "props": {
    "class": {
      "defaultValue": {
        "value": "'has-succeeds-seperator'",
        "computed": false
      },
      "required": false
    },
    "children": {
      "type": {
        "name": "any"
      },
      "required": false,
      "description": ""
    }
  }
};