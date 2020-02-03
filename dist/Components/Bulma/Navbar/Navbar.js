"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Brand = Brand;
exports.Dropdown = Dropdown;
exports.End = End;
exports.Start = Start;
exports.Item = Item;
exports.Navbar = Navbar;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

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

Brand.propTypes = {
  title: _propTypes["default"].string.isRequired,
  href: _propTypes["default"].string
};
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

Dropdown.propTypes = {
  children: _propTypes["default"].any,
  title: _propTypes["default"].string.isRequired
};
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

End.propTypes = {
  children: _propTypes["default"].any
};
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

Start.propTypes = {
  children: _propTypes["default"].any
};
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

Item.propTypes = {
  title: _propTypes["default"].string.isRequired,
  className: _propTypes["default"].string,
  href: _propTypes["default"].string.isRequired
};
/**
 * Navbar
 * @param {*} props
 */

function Navbar(props) {
  return _react["default"].createElement("div", {
    className: props.dark ? 'navbar is-dark' : 'navbar'
  }, props.children);
}

Navbar.propTypes = {
  children: _propTypes["default"].any,
  dark: _propTypes["default"].bool
};
Navbar.__docgenInfo = {
  "description": "Navbar\n@param {*} props",
  "methods": [],
  "displayName": "Navbar",
  "props": {
    "children": {
      "type": {
        "name": "any"
      },
      "required": false,
      "description": ""
    },
    "dark": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    }
  }
};
var _default = Navbar;
exports["default"] = _default;
Brand.__docgenInfo = {
  "description": "Brand\n@param { Object } props\n@param { String='/' } props.href - Location where the brand should link to\n@param { String } props.title - Brand name",
  "methods": [],
  "displayName": "Brand",
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
      "required": false,
      "description": ""
    }
  }
};
Dropdown.__docgenInfo = {
  "description": "Dropdown\n@param { Object } props\n@param { String } props.title - Dropdown link title\n@param { Object } props.children - Navbar Items",
  "methods": [],
  "displayName": "Dropdown",
  "props": {
    "children": {
      "type": {
        "name": "any"
      },
      "required": false,
      "description": ""
    },
    "title": {
      "type": {
        "name": "string"
      },
      "required": true,
      "description": ""
    }
  }
};
End.__docgenInfo = {
  "description": "Navbar End\nItems at the end of the navbar (right side).\n@param {*} props",
  "methods": [],
  "displayName": "End",
  "props": {
    "children": {
      "type": {
        "name": "any"
      },
      "required": false,
      "description": ""
    }
  }
};
Start.__docgenInfo = {
  "description": "Navbar Start\nItems on the left side of the navbar.\n@param {*} props",
  "methods": [],
  "displayName": "Start",
  "props": {
    "children": {
      "type": {
        "name": "any"
      },
      "required": false,
      "description": ""
    }
  }
};
Item.__docgenInfo = {
  "description": "Navbar Item\n@param {*} props\n@param { String } props.href - Link location.\n@param { String } props.title - Link title.",
  "methods": [],
  "displayName": "Item",
  "props": {
    "title": {
      "type": {
        "name": "string"
      },
      "required": true,
      "description": ""
    },
    "className": {
      "type": {
        "name": "string"
      },
      "required": false,
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