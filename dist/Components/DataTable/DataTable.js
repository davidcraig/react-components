"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DataTable = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

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

var DataTable =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DataTable, _React$Component);

  function DataTable() {
    _classCallCheck(this, DataTable);

    return _possibleConstructorReturn(this, _getPrototypeOf(DataTable).apply(this, arguments));
  }

  _createClass(DataTable, [{
    key: "getColumns",
    value: function getColumns() {
      var cols = this.props.columns;

      if (!cols) {
        // If we dont have explicit columns, try to be implicit.
        cols = this.getImplicitColumns();
      }

      return cols;
    }
  }, {
    key: "getImplicitColumns",
    value: function getImplicitColumns() {
      var columns = {};
      this.props.items.map(function (i) {
        Object.keys(i).map(function (col) {
          if (typeof columns[col] === 'undefined') {
            columns[col] = {
              field: col,
              name: col
            };
          }
        });
      });
      var columnArray = [];
      Object.keys(columns).map(function (col) {
        columnArray.push(columns[col]);
      });
      return columnArray;
    }
  }, {
    key: "renderColumnHeadings",
    value: function renderColumnHeadings() {
      var cols = this.getColumns();
      return _react["default"].createElement("tr", null, cols.map(function (c) {
        return _react["default"].createElement("th", {
          key: c.field
        }, c.name);
      }));
    }
  }, {
    key: "getFieldKey",
    value: function getFieldKey(item, column) {
      return item.name + column.field;
    }
  }, {
    key: "renderField",
    value: function renderField(item, column) {
      var key = this.getFieldKey(item, column);

      if (typeof column.field === 'function') {
        return _react["default"].createElement("td", {
          key: key
        }, column.field(item));
      }

      return _react["default"].createElement("td", {
        key: key
      }, item[column.field]);
    }
  }, {
    key: "renderData",
    value: function renderData() {
      var _this = this;

      var items = this.props.items;
      var columns = this.getColumns();

      if (!items || !columns) {
        return '';
      }

      return items.map(function (i) {
        var cssClass = '';

        if (typeof i.className !== 'undefined') {
          cssClass = i.className;
        }

        return _react["default"].createElement("tr", {
          key: i.name,
          className: cssClass
        }, columns.map(function (c) {
          return _this.renderField(i, c);
        }));
      });
    }
  }, {
    key: "tableClasses",
    value: function tableClasses() {
      var classNames = ['table'];

      if (typeof this.props.classes !== 'undefined') {
        this.props.classes.map(function (c) {
          classNames.push(c);
        });
      }

      return classNames.join(' ');
    }
  }, {
    key: "render",
    value: function render() {
      var headings = this.renderColumnHeadings();
      var data = this.renderData();
      var tClass = this.tableClasses();
      return _react["default"].createElement("table", {
        className: tClass
      }, _react["default"].createElement("thead", null, headings), _react["default"].createElement("tbody", null, data));
    }
  }]);

  return DataTable;
}(_react["default"].Component);

exports.DataTable = DataTable;
DataTable.defaultProps = {
  primaryKey: 'id'
};
var _default = DataTable;
exports["default"] = _default;